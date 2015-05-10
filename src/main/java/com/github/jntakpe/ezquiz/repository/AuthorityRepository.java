package com.github.jntakpe.ezquiz.repository;


import com.github.jntakpe.ezquiz.domain.Authority;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Publication des méthodes de gestion de l'entité {@link Authority}
 *
 * @author jntakpe
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {

}
