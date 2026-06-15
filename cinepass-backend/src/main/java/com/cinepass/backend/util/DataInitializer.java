package com.cinepass.backend.util;

import com.cinepass.backend.entity.*;
import com.cinepass.backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.Set;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CityRepository cityRepository;

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private GenreRepository genreRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        if (roleRepository.count() == 0) {
            roleRepository.save(new Role(null, RoleName.ROLE_USER));
            roleRepository.save(new Role(null, RoleName.ROLE_THEATRE_ADMIN));
            roleRepository.save(new Role(null, RoleName.ROLE_ADMIN));
            roleRepository.save(new Role(null, RoleName.ROLE_SUPER_ADMIN));
        }

        if (userRepository.count() == 0) {
            Role adminRole = roleRepository.findByName(RoleName.ROLE_ADMIN).get();
            User admin = User.builder()
                    .firstName("Admin")
                    .lastName("CinePass")
                    .email("admin@cinepass.com")
                    .phoneNumber("9999999999")
                    .password(passwordEncoder.encode("admin123"))
                    .roles(Set.of(adminRole))
                    .build();
            userRepository.save(admin);
        }

        if (cityRepository.count() == 0) {
            cityRepository.save(new City(null, "Mumbai", "Maharashtra", "India", true));
            cityRepository.save(new City(null, "Delhi", "Delhi", "India", true));
            cityRepository.save(new City(null, "Bangalore", "Karnataka", "India", true));
        }

        if (movieRepository.count() == 0) {
            Genre action = genreRepository.save(new Genre(null, "Action"));
            Genre sciFi = genreRepository.save(new Genre(null, "Sci-Fi"));

            Movie movie1 = Movie.builder()
                    .title("Interstellar")
                    .description("A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.")
                    .posterUrl("https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg")
                    .backdropUrl("https://image.tmdb.org/t/p/original/rAiDLZ0S6Yzl9v9S9S6S6S6S6S6.jpg")
                    .durationMinutes(169)
                    .releaseDate(LocalDate.of(2014, 11, 7))
                    .language("English")
                    .genres(Set.of(action, sciFi))
                    .rating(8.7)
                    .status(MovieStatus.NOW_SHOWING)
                    .trending(true)
                    .build();
            movieRepository.save(movie1);
        }
    }
}
