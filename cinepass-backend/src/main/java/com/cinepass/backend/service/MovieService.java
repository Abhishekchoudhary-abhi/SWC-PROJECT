package com.cinepass.backend.service;

import com.cinepass.backend.entity.Movie;
import com.cinepass.backend.entity.MovieStatus;
import com.cinepass.backend.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    public List<Movie> getNowShowing() {
        return movieRepository.findByStatus(MovieStatus.NOW_SHOWING);
    }

    public List<Movie> getComingSoon() {
        return movieRepository.findByStatus(MovieStatus.COMING_SOON);
    }

    public List<Movie> getTrending() {
        return movieRepository.findByTrendingTrue();
    }

    public Movie getMovieById(Long id) {
        return movieRepository.findById(id).orElse(null);
    }

    public List<Movie> searchMovies(String query) {
        return movieRepository.findByTitleContainingIgnoreCase(query);
    }

    public Movie saveMovie(Movie movie) {
        return movieRepository.save(movie);
    }
}
