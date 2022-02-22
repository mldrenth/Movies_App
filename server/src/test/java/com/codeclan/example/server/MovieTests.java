package com.codeclan.example.server;
import com.codeclan.example.server.models.Genre;
import com.codeclan.example.server.models.Movie;
import org.junit.Before;
import org.junit.Test;
import java.util.Arrays;
import java.util.List;
import static org.junit.Assert.assertEquals;

public class MovieTests {

    Movie movie1;

    Genre action = new Genre(28, "Action");
    Genre adventure = new Genre(12, "Adventure");
    List<Genre> genres = Arrays.asList(action, adventure);

    @Before
    public void before() {
        movie1 = new Movie(
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
    }


    @Test
    public void hasTitle() {
        assertEquals("Spider-Man: No Way Home", movie1.getTitle());
    }

    @Test
    public void hasGenres() {
        assertEquals(2, movie1.getGenres().size());
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
