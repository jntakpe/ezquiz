package com.github.jntakpe.ezquiz.dto;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Réprésentation d'un utilisateur
 *
 * @author jntakpe
 */
public class UserDTO {

    private String login;

    private List<String> roles;

    public UserDTO(UserDetails user) {
        this.login = user.getUsername();
        this.roles = user.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList());
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .append("login", login)
                .append("roles", roles)
                .toString();
    }
}
