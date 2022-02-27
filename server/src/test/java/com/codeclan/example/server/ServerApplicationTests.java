package com.codeclan.example.server;
import com.codeclan.example.server.models.Movie;
import com.codeclan.example.server.models.MovieUserRating;
import com.codeclan.example.server.models.User;
import com.codeclan.example.server.repositories.MovieRepository;
import com.codeclan.example.server.repositories.MovieUserRatingRepository;
import com.codeclan.example.server.repositories.UserRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.List;
import static org.junit.Assert.assertFalse;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;


@SpringBootTest
class ServerApplicationTests {


	@Autowired
	UserRepository userRepository;

	@Autowired
	MovieRepository movieRepository;

	@Autowired
	MovieUserRatingRepository movieUserRatingRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void canFindMoviesUsersFavouritesById(){
		List<Movie> foundMoviesFavourites = movieRepository.findMoviesUsersFavouritesById(1L);
		assertEquals(1, foundMoviesFavourites.size());
	}

	@Test
	public void canCheckIfIdFromApiExistsInDB(){
		assertTrue(movieRepository.existsMovieByidFromApi(634649));
		Assertions.assertFalse(movieRepository.existsMovieByidFromApi(1111));

	}

	@Test
	public void canFindByIdFromApi(){
		Movie movieToFind = movieRepository.findMovieByidFromApi(634649);
		assertEquals("Spider-Man: No Way Home", movieToFind.getTitle());
	}

	@Test
	public void canFindUsersWatchlist(){
		List<Movie> foundMovies = movieRepository.findMoviesUsersWatchlistById(1L);
		assertEquals(1, foundMovies.size());
	}

	@Test
	public void userCanCreateRating(){
		User userToMakeRating = userRepository.findById(1L).get();
		Movie movieToRate = movieRepository.findById(2L).get();
		MovieUserRating rating = new MovieUserRating(movieToRate, userToMakeRating, 20);
		movieUserRatingRepository.save(rating);
		List<MovieUserRating> foundRatings = userToMakeRating.getRatings();
		List<MovieUserRating> allRatings = movieUserRatingRepository.findAll();
		assertEquals(2, foundRatings.size());
		assertEquals(2, allRatings.size());
	}

	@Test
	public void canFindUserByEmailAndPassword(){
		User foundUser = userRepository.findUserByEmailAndPassword("fiona.g@gmail.com", "888");
		assertEquals("Fiona", foundUser.getFirstName());
	}
}
