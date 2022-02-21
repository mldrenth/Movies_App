package com.codeclan.example.server;

import com.codeclan.example.server.models.Movie;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class MovieTests {

    Movie movie1;

    @Before
    public void before() {
         movie1 = new Movie(
                "imageVerticalUrl",
                "imageHorizontalUrl",
                "Spider-Man: No Way Home",
                "Action",
                "...Spider-Man.",
                8.3,
                "2021-12-15",
                9805.303,
                7,
                634649,
                "video");
    }


    @Test
    public void hasTitle() {
        assertEquals("Spider-Man: No Way Home", movie1.getTitle());
    }

    @Test
    public void hasGenre() {
        assertEquals("Action", movie1.getGenre());
    }

    @Test
    public void hasAverageRating() {
        assertEquals(8.3, movie1.getAverageRating(), 0.0);
    }

    @Test
    public void hasReleaseDate() {
        assertEquals("2021-12-15", movie1.getReleaseDate());
    }

    @Test
    public void hasPopularity() {
        assertEquals(9805.303, movie1.getPopularity(), 0.0);
    }

    @Test
    public void hasUserRating() {
        assertEquals(7, movie1.getUserRating());
    }

    @Test
    public void hasIdFromApi() {
        assertEquals(634649, movie1.getIdFromApi());
    }

}
