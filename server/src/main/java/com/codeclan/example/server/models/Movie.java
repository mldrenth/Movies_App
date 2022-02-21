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
    @Column(name = "imageVerticalUrl")
    private String imageVerticalUrl;
    @Column(name = "imageHorizontalUrl")
    private String imageHorizontalUrl;
    @Column(name = "title")
    private String title;
    @Column(name = "genres")
    private String genre;
    @Column(name = "overview")
    private String overview;
    @Column(name = "averageRating")
    private double averageRating;
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
    @JsonIgnoreProperties({"moviesFavourites"})
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
//
//    @ManyToMany
//    @JsonIgnoreProperties({"moviesWatchlist"})
//    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
//    @JoinTable(
//            name = "users_moviesWatchlist",
//            joinColumns = { @JoinColumn (
//                    name = "movie_id",
//                    nullable = false,
//                    updatable = false)
//            },
//            inverseJoinColumns = { @JoinColumn (
//                    name = "user_id",
//                    nullable = false,
//                    updatable = false)
//            }
//    )
//    private List<User> usersWatchlist;


    public Movie(String imageVerticalUrl, String imageHorizontalUrl, String title, String genre, String overview, double averageRating, String releaseDate, double popularity, int userRating, int idFromApi, String video) {
        this.imageVerticalUrl = imageVerticalUrl;
        this.imageHorizontalUrl = imageHorizontalUrl;
        this.title = title;
        this.genre = genre;
        this.overview = overview;
        this.averageRating = averageRating;
        this.releaseDate = releaseDate;
        this.popularity = popularity;
        this.userRating = userRating;
        this.idFromApi = idFromApi;
        this.video = video;
        this.usersFavourites = new ArrayList<>();
//        this.usersWatchlist = new ArrayList<>();
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

    public String getImageVerticalUrl() {
        return imageVerticalUrl;
    }

    public void setImageVerticalUrl(String imageVerticalUrl) {
        this.imageVerticalUrl = imageVerticalUrl;
    }

    public String getImageHorizontalUrl() {
        return imageHorizontalUrl;
    }

    public void setImageHorizontalUrl(String imageHorizontalUrl) {
        this.imageHorizontalUrl = imageHorizontalUrl;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getOverview() {
        return overview;
    }

    public void setOverview(String overview) {
        this.overview = overview;
    }

    public double getAverageRating() {
        return averageRating;
    }

    public void setAverageRating(double averageRating) {
        this.averageRating = averageRating;
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
}
