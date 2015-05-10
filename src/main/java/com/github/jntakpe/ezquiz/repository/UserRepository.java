package com.github.jntakpe.ezquiz.repository;


import com.github.jntakpe.ezquiz.domain.User;

import java.util.Optional;

/**
 * Publication des méthodes de gestion de l'entité {@link User}
 *
 * @author jntakpe
 */
public interface UserRepository extends GenericRepository<User> {

  Optional<User> findByLoginIgnoreCase(String login);

  Optional<User> findByEmail(String email);

}
