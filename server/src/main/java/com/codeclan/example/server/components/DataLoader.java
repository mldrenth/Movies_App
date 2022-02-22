package com.codeclan.example.server.components;
import com.codeclan.example.server.models.Genre;
import com.codeclan.example.server.models.User;
import com.codeclan.example.server.repositories.GenreRepository;
import com.codeclan.example.server.repositories.UserRepository;
import com.codeclan.example.server.models.Movie;
import com.codeclan.example.server.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import java.util.Arrays;
import java.util.List;


@Component
public class DataLoader implements ApplicationRunner  {

    @Autowired
    UserRepository userRepository;

    @Autowired
    MovieRepository movieRepository;

    @Autowired
    GenreRepository genreRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args) {

        // Genres
        Genre action = new Genre(28, "Action");
        genreRepository.save(action);

        Genre adventure = new Genre(12, "Adventure");
        genreRepository.save(adventure);

        Genre animation = new Genre(16, "Animation");
        genreRepository.save(animation);

        Genre comedy = new Genre(35, "Comedy");
        genreRepository.save(comedy);

        Genre crime = new Genre(80, "Crime");
        genreRepository.save(crime);

        Genre documentary = new Genre(99, "Documentary");
        genreRepository.save(documentary);

        Genre drama = new Genre(18, "Drama");
        genreRepository.save(drama);

        Genre family = new Genre(10751, "Family");
        genreRepository.save(family);

        Genre fantasy = new Genre(14, "Fantasy");
        genreRepository.save(fantasy);

        Genre history = new Genre(36, "History");
        genreRepository.save(history);

        Genre horror = new Genre(27, "Horror");
        genreRepository.save(horror);

        Genre music = new Genre(10402, "Music");
        genreRepository.save(music);

        Genre mystery = new Genre(9648, "Mystery");
        genreRepository.save(mystery);

        Genre romance = new Genre(10749, "Romance");
        genreRepository.save(romance);

        Genre science_fiction = new Genre(878, "Science Fiction");
        genreRepository.save(science_fiction);

        Genre tv_movie = new Genre(10770, "TV Movie");
        genreRepository.save(tv_movie);

        Genre thriller = new Genre(53, "Thriller");
        genreRepository.save(thriller);

        Genre war = new Genre(10752, "War");
        genreRepository.save(war);

        Genre western = new Genre(37, "Western");
        genreRepository.save(western);

        List<Genre> genres = Arrays.asList(action, adventure);


        // Users
        User user1 = new User("Fiona", "fiona.g@gmail.com", "888");
        userRepository.save(user1);


        // Movies
        Movie movie1 = new Movie(
                "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
                "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
                "Spider-Man: No Way Home", genres,
                "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
                8.3, "2021-12-15", 9805.303, 7,
                634649, "Bh8NeyejykU");
        movieRepository.save(movie1);

        action.addMovie(movie1);
        genreRepository.save(action);
        adventure.addMovie(movie1);
        genreRepository.save(adventure);
        science_fiction.addMovie(movie1);
        genreRepository.save(science_fiction);
    }

}
