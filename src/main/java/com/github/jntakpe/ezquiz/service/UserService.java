package com.github.jntakpe.ezquiz.service;

import com.github.jntakpe.ezquiz.domain.User;
import com.github.jntakpe.ezquiz.repository.UserRepository;
import org.hibernate.Hibernate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Services associés à l'entité {@link com.github.jntakpe.ezquiz.domain.User}
 *
 * @author jntakpe
 */
@Service
public class UserService {

  private static final Logger LOGGER = LoggerFactory.getLogger(UserService.class);

  private UserRepository userRepository;

  @Autowired
  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  /**
   * Récupère un utilisateur et ces rôles à partir de son login en ignorant la case
   *
   * @param login login de l'utilisateur recherché
   * @return l'utilisateur correspondant au login
   * @throws UsernameNotFoundException si ce login n'existe pas en base de données
   */
  @Transactional(readOnly = true)
  public User findByLoginWithAuthorities(String login) {
    User user = findByLogin(login).orElseThrow(() -> new UsernameNotFoundException("User " + login + " not found in DB"));
    LOGGER.trace("Fetching authorities for user {}", login);
    Hibernate.initialize(user.getAuthorities());
    return user;
  }

  /**
   * Récupère un utilisateur à partir de son login
   *
   * @param login login de l'utilisateur recherché
   * @return l'utilisateur correspondant au login
   */
  @Transactional(readOnly = true)
  public Optional<User> findByLogin(String login) {
    LOGGER.trace("Searching user with username {} from DB", login);
    return userRepository.findByLoginIgnoreCase(login);
  }
}
