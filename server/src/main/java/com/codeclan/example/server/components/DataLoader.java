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

        Genre action = new Genre(28, "Action");
        genreRepository.save(action);

        Genre adventure = new Genre(12, "Adventure");
        genreRepository.save(adventure);

        User user1 = new User("Fiona", "fiona.g@gmail.com", "888");
        userRepository.save(user1);

        List<Genre> genres = Arrays.asList(action, adventure);


        Movie movie1 = new Movie(
                "imageVerticalUrl",
                "imageHorizontalUrl",
                "Spider-Man: No Way Home",
                genres,
                "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
                8.3,
                "2021-12-15",
                9805.303,
                7,
                634649,
                "video");
        movieRepository.save(movie1);

        action.addMovie(movie1);
        genreRepository.save(action);

        adventure.addMovie(movie1);
        genreRepository.save(adventure);
    }

}
