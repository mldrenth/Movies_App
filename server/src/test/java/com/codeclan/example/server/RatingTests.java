package com.codeclan.example.server;

import com.codeclan.example.server.models.Genre;
import com.codeclan.example.server.models.Movie;
import com.codeclan.example.server.models.MovieUserRating;
import com.codeclan.example.server.models.User;
import org.junit.Before;
import org.junit.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.assertEquals;

public class RatingTests {

    User user1;
    Movie movie1;
    Genre action;
    Genre adventure;
    Genre science_fiction;
    List<Genre> genres;
    MovieUserRating rating;

    @Before
    public void before(){
        user1 = new User("FionaG", "Fiona", "Graham", "+447366258836", "fiona.g@gmail.com", "888");

        action = new Genre(28, "Action");
        adventure = new Genre(12, "Adventure");
        science_fiction = new Genre(878, "Science Fiction");
        genres = Arrays.asList(action, adventure, science_fiction);

        movie1 = new Movie(
                "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
                "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
                "Spider-Man: No Way Home", genres,
                "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
                8.3, "2021-12-15", 9805.303,
                634649, "Bh8NeyejykU");

        rating = new MovieUserRating(movie1, user1, 10);

    }

    @Test
    public void ratingHasMovie(){
        assertEquals(movie1, rating.getMovie());
    }

    @Test
    public void ratingHasUser(){
        assertEquals(user1, rating.getUser());
    }

    @Test
    public void ratingHasRating(){
        assertEquals(10, rating.getRating());
    }

}
