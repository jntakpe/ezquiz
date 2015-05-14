package com.github.jntakpe.ezquiz.web;

import com.github.jntakpe.ezquiz.config.security.SecurityUtils;
import com.github.jntakpe.ezquiz.dto.UserDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Ressource associée au compte utilisateur courant
 *
 * @author jntakpe
 */
@RestController
@RequestMapping(UrlConstants.ACCOUNT)
public class AccountResource {

    /**
     * Récupère l'utilisateur de Spring Security courant
     *
     * @return utilisateur courant ou code HTTP 401 (UNAUTHORIZED)
     */
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<UserDTO> current() {
        return SecurityUtils.getCurrentUser()
                .map(u -> new ResponseEntity<>(new UserDTO(u), HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.UNAUTHORIZED));
    }
}
