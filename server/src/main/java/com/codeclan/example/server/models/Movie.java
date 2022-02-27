package com.codeclan.example.server.models;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "movies")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "posterPath")
    private String posterPath;
    @Column(name = "backdropPath")
    private String backdropPath;
    @Column(name = "title")
    private String title;

    @Column(name = "genres")
    @ManyToMany
    @JsonIgnoreProperties({"movies"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "movies_genres",
            joinColumns = { @JoinColumn (
                    name = "movie_id",
                    nullable = false,
                    updatable = false)
            },
            inverseJoinColumns = { @JoinColumn (
                    name = "genre_id",
                    nullable = false,
                    updatable = false)
            }
    )
    private List<Genre> genres;

    @Column(name = "overview", length=1000)
    private String overview;
    @Column(name = "voteAverage")
    private double voteAverage;
    @Column(name = "releaseDate")
    private String releaseDate;
    @Column(name = "popularity")
    private double popularity;
    @Column(name = "userRating")
    private int userRating;
    @Column(name = "idFromApi")
    private int idFromApi;
    @Column(name = "video")
    private String video;

    @ManyToMany
    @JsonIgnoreProperties({"moviesFavourites", "moviesWatchlist", "ratings"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "users_moviesFavourites",
            joinColumns = { @JoinColumn (
                    name = "movie_id",
                    nullable = false,
                    updatable = false)
            },
            inverseJoinColumns = { @JoinColumn (
                    name = "user_id",
                    nullable = false,
                    updatable = false)
            }
    )
    private List<User> usersFavourites;

    @ManyToMany
    @JsonIgnoreProperties({"moviesFavourites", "moviesWatchlist", "ratings"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "users_moviesWatchlist",
            joinColumns = { @JoinColumn (
                    name = "movie_id",
                    nullable = false,
                    updatable = false)
            },
            inverseJoinColumns = { @JoinColumn (
                    name = "user_id",
                    nullable = false,
                    updatable = false)
            }
    )
    private List<User> usersWatchlist;

    @OneToMany(mappedBy = "movie", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties({"ratings"})
    private List<MovieUserRating> ratings;

    public Movie(String posterPath, String backdropPath, String title, List<Genre> genres, String overview, double voteAverage, String releaseDate, double popularity, int userRating, int idFromApi, String video) {
        this.posterPath = posterPath;
        this.backdropPath = backdropPath;
        this.title = title;
        this.genres = genres;
        this.overview = overview;
        this.voteAverage = voteAverage;
        this.releaseDate = releaseDate;
        this.popularity = popularity;
        this.userRating = userRating;
        this.idFromApi = idFromApi;
        this.video = video;
        this.usersFavourites = new ArrayList<User>();
        this.usersWatchlist = new ArrayList<User>();
        this.ratings = new ArrayList<>();
    }

    // POJO
    public Movie() {
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPosterPath() {
        return posterPath;
    }

    public void setPosterPath(String posterPath) {
        this.posterPath = posterPath;
    }

    public String getBackdropPath() {
        return backdropPath;
    }

    public void setBackdropPath(String backdropPath) {
        this.backdropPath = backdropPath;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<Genre> getGenres() {
        return genres;
    }

    public void setGenres(List<Genre> genres) {
        this.genres = genres;
    }

    public String getOverview() {
        return overview;
    }

    public void setOverview(String overview) {
        this.overview = overview;
    }

    public double getVoteAverage() {
        return voteAverage;
    }

    public void setVoteAverage(double voteAverage) {
        this.voteAverage = voteAverage;
    }

    public String getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }

    public double getPopularity() {
        return popularity;
    }

    public void setPopularity(double popularity) {
        this.popularity = popularity;
    }

    public int getUserRating() {
        return userRating;
    }

    public void setUserRating(int userRating) {
        this.userRating = userRating;
    }

    public int getIdFromApi() {
        return idFromApi;
    }

    public void setIdFromApi(int idFromApi) {
        this.idFromApi = idFromApi;
    }

    public String getVideo() {
        return video;
    }

    public void setVideo(String video) {
        this.video = video;
    }

    public List<User> getUsersFavourites() {
        return usersFavourites;
    }

    public void setUsersFavourites(List<User> usersFavourites) {
        this.usersFavourites = usersFavourites;
    }

    public List<User> getUsersWatchlist() {
        return usersWatchlist;
    }

    public void setUsersWatchlist(List<User> usersWatchlist) {
        this.usersWatchlist = usersWatchlist;
    }

    public void addUserToUsersWatchlist(User user){
        this.usersWatchlist.add(user);
    }

    public void addUserToUsersFavourites(User user){
        this.usersFavourites.add(user);
    }

    public List<MovieUserRating> getRatings() {
        return ratings;
    }

    public void setRatings(List<MovieUserRating> ratings) {
        this.ratings = ratings;
    }
}
