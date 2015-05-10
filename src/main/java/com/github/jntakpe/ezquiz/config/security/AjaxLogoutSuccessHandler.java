package com.github.jntakpe.ezquiz.config.security;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.web.authentication.AbstractAuthenticationTargetUrlRequestHandler;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Gestion des déconnexion pour Spring Security
 *
 * @author jntakpe
 */
@Component
public class AjaxLogoutSuccessHandler extends AbstractAuthenticationTargetUrlRequestHandler implements LogoutSuccessHandler {

  public static final String BEARER = "Bearer ";

  public static final String AUTHORIZATION = "authorization";

  @Autowired
  private TokenStore tokenStore;

  @Override
  public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication)
    throws IOException, ServletException {
    String token = request.getHeader(AUTHORIZATION);
    if (token != null && token.startsWith(BEARER)) {
      OAuth2AccessToken accessToken = tokenStore.readAccessToken(StringUtils.substringAfter(token, BEARER));
      if (accessToken != null) {
        tokenStore.removeAccessToken(accessToken);
      }
    }
    response.setStatus(HttpServletResponse.SC_OK);
  }
}
