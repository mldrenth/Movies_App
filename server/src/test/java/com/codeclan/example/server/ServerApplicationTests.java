package com.codeclan.example.server;
import com.codeclan.example.server.models.Movie;
import com.codeclan.example.server.repositories.MovieRepository;
import com.codeclan.example.server.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class ServerApplicationTests {


	@Autowired
	UserRepository userRepository;

	@Autowired
	MovieRepository movieRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void canFindMoviesUsersFavouritesById(){
		List<Movie> foundMoviesFavourites = movieRepository.findMoviesUsersFavouritesById(1L);
		assertEquals(1, foundMoviesFavourites.size());
	}

}
