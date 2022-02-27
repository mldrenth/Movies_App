package com.codeclan.example.server.models;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "username")
    private String username;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "phone_number")
    private String phoneNumber;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;

    @ManyToMany
    @JsonIgnoreProperties({"usersFavourites", "usersWatchlist", "ratings"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "users_moviesFavourites",
            joinColumns = { @JoinColumn (
                    name = "user_id",
                    nullable = false,
                    updatable = false)
            },
            inverseJoinColumns = { @JoinColumn (
                    name = "movie_id",
                    nullable = false,
                    updatable = false)
            }
    )
    private List<Movie> moviesFavourites;

    @ManyToMany
    @JsonIgnoreProperties({"usersWatchlist", "usersFavourites", "ratings"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "users_moviesWatchlist",
            joinColumns = { @JoinColumn (
                    name = "user_id",
                    nullable = false,
                    updatable = false)
            },
            inverseJoinColumns = { @JoinColumn (
                    name = "movie_id",
                    nullable = false,
                    updatable = false)
            }
    )
    private List<Movie> moviesWatchlist;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties({"users"})
    private List<MovieUserRating> ratings;


// friends(List of Users)   // TODO


    public User(String username, String firstName, String lastName, String phoneNumber, String email, String password) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
        this.moviesFavourites = new ArrayList<Movie>();
        this.moviesWatchlist = new ArrayList<Movie>();
        this.ratings = new ArrayList<>();
    }

    // POJO
    public User() {
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void addMovieToFavourites(Movie movie){
        this.moviesFavourites.add(movie);
    }

    public List<Movie> getMoviesFavourites() {
        return moviesFavourites;
    }

    public void setMoviesFavourites(List<Movie> moviesFavourites) {
        this.moviesFavourites = moviesFavourites;
    }

    public void addMovieToWatchlist(Movie movie) {
        this.moviesWatchlist.add(movie);
    }

    public List<Movie> getMoviesWatchlist() {
        return moviesWatchlist;
    }

    public void setMoviesWatchlist(List<Movie> moviesWatchlist) {
        this.moviesWatchlist = moviesWatchlist;
    }

    public void removeMovieFromFavourites(Movie movie) {
        this.moviesFavourites.remove(movie);
    }

    public void removeMovieFromWatchlist(Movie movie) {
        this.moviesWatchlist.remove(movie);
    }

    public List<MovieUserRating> getRatings() {
        return ratings;
    }

    public void setRatings(List<MovieUserRating> ratings) {
        this.ratings = ratings;
    }



    public void addRatingToRatings(MovieUserRating rating) {
        this.ratings.add(rating);
    }

}
