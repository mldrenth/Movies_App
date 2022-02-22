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
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;

    @ManyToMany
    @JsonIgnoreProperties({"usersFavourites"})
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
    @JsonIgnoreProperties({"usersWatchlist"})
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


    // friends(List of Users)   // TODO


    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.moviesFavourites = new ArrayList<Movie>();
        this.moviesWatchlist = new ArrayList<Movie>();
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

}
