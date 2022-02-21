package com.codeclan.example.server.components;
import com.codeclan.example.server.models.User;
import com.codeclan.example.server.repositories.UserRepository;
import com.codeclan.example.server.models.Movie;
import com.codeclan.example.server.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;


@Component
public class DataLoader implements ApplicationRunner  {

    @Autowired
    UserRepository userRepository;

    @Autowired
    MovieRepository movieRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args) {
        // TODO

        User user1 = new User("Fiona", "fiona.g@gmail.com", "888");
        userRepository.save(user1);

        // List<Integer> genres = Arrays.asList(23, 43);
        Movie movie1 = new Movie("imageVerticalUrl", "imageHorizontalUrl", "title", "genre", "overview", 8.5, "releaseDate", 8.6, 7, 634649, "video");
        movieRepository.save(movie1);
    }

}
