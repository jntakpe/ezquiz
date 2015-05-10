package com.github.jntakpe.ezquiz.repository;

import com.github.jntakpe.ezquiz.domain.AbstractEntity;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Publication des méthodes de gestion d'entité génériques descendantes de la classe {@link AbstractEntity}
 *
 * @author jntakpe
 */
public interface GenericRepository<T extends AbstractEntity> extends JpaRepository<T, Long> {

}
