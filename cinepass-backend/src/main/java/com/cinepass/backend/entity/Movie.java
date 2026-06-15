package com.cinepass.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "movies")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String trailerUrl;

    private String posterUrl;

    private String backdropUrl;

    private Integer durationMinutes;

    private LocalDate releaseDate;

    private String language;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "movie_genres",
            joinColumns = @JoinColumn(name = "movie_id"),
            inverseJoinColumns = @JoinColumn(name = "genre_id"))
    @Builder.Default
    private Set<Genre> genres = new HashSet<>();

    private Double rating;

    @Enumerated(EnumType.STRING)
    private MovieStatus status; // NOW_SHOWING, COMING_SOON, ARCHIVED

    @Builder.Default
    private boolean trending = false;
}
