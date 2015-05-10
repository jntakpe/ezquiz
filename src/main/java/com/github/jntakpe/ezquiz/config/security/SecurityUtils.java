package com.github.jntakpe.ezquiz.config.security;

import com.github.jntakpe.ezquiz.config.ConfigConstants;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Optional;

/**
 * Classe utilitaire de Spring Security
 *
 * @author jntakpe
 */
public final class SecurityUtils {

  private SecurityUtils() {
  }

  /**
   * Récupère l'id de l'utilisateur Spring Security courant
   *
   * @return l'id d'utilisateur courant
   */
  public static Optional<Long> getCurrentId() {
    Authentication authentication = getAuthentification();
    SpringSecurityUser springSecurityUser;
    if (authentication != null && authentication.getPrincipal() instanceof SpringSecurityUser) {
      springSecurityUser = (SpringSecurityUser) authentication.getPrincipal();
      return Optional.of(springSecurityUser.getId());
    }
    return Optional.empty();
  }

  /**
   * Récupère le login de l'utilisateur Spring Security courant
   *
   * @return le nom d'utilisateur courant
   */
  public static Optional<String> getCurrentLogin() {
    Authentication authentication = getAuthentification();
    String userName = null;
    if (authentication != null) {
      if (authentication.getPrincipal() instanceof UserDetails) {
        userName = ((UserDetails) authentication.getPrincipal()).getUsername();
      } else if (authentication.getPrincipal() instanceof String) {
        userName = (String) authentication.getPrincipal();
      }
    }
    return Optional.ofNullable(userName);
  }

  /**
   * Vérifie si l'utilisateur est authentifié
   *
   * @return {@code true} si l'utilisateur est authentifié sinon {@code false}
   */
  public static boolean isAuthenticated() {
    Collection<? extends GrantedAuthority> authorities = getAuthentification().getAuthorities();
    if (authorities != null) {
      for (GrantedAuthority authority : authorities) {
        if (authority.getAuthority().equals(ConfigConstants.ANONYMOUS)) {
          return false;
        }
      }
    }
    return true;
  }

  private static Authentication getAuthentification() {
    return SecurityContextHolder.getContext().getAuthentication();
  }
}
