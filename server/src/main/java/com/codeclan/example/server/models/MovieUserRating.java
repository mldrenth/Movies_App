package com.codeclan.example.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "movie_user_rating")
public class MovieUserRating{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JsonIgnoreProperties({"ratings", "usersFavourites", "usersWatchlist"})
    private Movie movie;

    @ManyToOne
    @JsonIgnoreProperties({"ratings", "moviesFavourites", "moviesWatchlist"})
    private User user;

    @Column(name = "rating")
    private int rating;

    public MovieUserRating(Movie movie, User user, int rating){
        this.movie = movie;
        this.user = user;
        this.rating = rating;
    }

    public MovieUserRating(){

    }

    public Long getId() {
        return id;
    }

    public Movie getMovie() {
        return movie;
    }

    public User getUser() {
        return user;
    }

    public int getRating() {
        return rating;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
