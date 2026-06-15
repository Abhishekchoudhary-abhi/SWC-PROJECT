package com.cinepass.backend.controller;

import com.cinepass.backend.entity.Movie;
import com.cinepass.backend.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping
    public List<Movie> getAllMovies() {
        return movieService.getAllMovies();
    }

    @GetMapping("/now-showing")
    public List<Movie> getNowShowing() {
        return movieService.getNowShowing();
    }

    @GetMapping("/coming-soon")
    public List<Movie> getComingSoon() {
        return movieService.getComingSoon();
    }

    @GetMapping("/trending")
    public List<Movie> getTrending() {
        return movieService.getTrending();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Movie> getMovie(@PathVariable Long id) {
        Movie movie = movieService.getMovieById(id);
        if (movie == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(movie);
    }

    @GetMapping("/search")
    public List<Movie> search(@RequestParam String q) {
        return movieService.searchMovies(q);
    }
}
