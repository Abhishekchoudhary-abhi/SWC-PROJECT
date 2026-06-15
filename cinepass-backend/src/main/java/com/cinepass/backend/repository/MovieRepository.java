package com.cinepass.backend.repository;

import com.cinepass.backend.entity.Movie;
import com.cinepass.backend.entity.MovieStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
    List<Movie> findByStatus(MovieStatus status);
    List<Movie> findByTrendingTrue();
    List<Movie> findByTitleContainingIgnoreCase(String title);
}
