package com.codeclan.example.server;
import com.codeclan.example.server.models.Genre;
import org.junit.Before;
import org.junit.Test;
import java.util.Arrays;
import java.util.List;
import static org.junit.Assert.assertEquals;

public class GenreTests {

    Genre action;
    Genre adventure;
    List<Genre> genres;

    @Before
    public void before() {

        action = new Genre(28, "Action");
        adventure = new Genre(12, "Adventure");
        genres = Arrays.asList(action, adventure);
    }

    @Test
    public void hasIdFromApi() {
        assertEquals(28, action.getIdFromApi());
    }

    @Test
    public void hasName() {
        assertEquals("Action", action.getName());
    }

    @Test
    public void hasListOfGenres() {
        assertEquals(2, genres.size());
    }


}
