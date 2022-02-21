package com.codeclan.example.server.models;
import java.util.List;


public class Movie {

    private Long id;
    private String imageVerticalUrl;
    private String imageHorizontalUrl;
    private String title;
    private List<Integer> genres;
    private String overview;
    private double averageRating;
    private String releaseDate;
    private double popularity;
    private int userRating;
    private Long idFromApi;
    private String video;

    public Movie(String imageVerticalUrl, String imageHorizontalUrl, String title, List<Integer> genres, String overview, double averageRating, String releaseDate, double popularity, int userRating, Long idFromApi, String video) {
        this.imageVerticalUrl = imageVerticalUrl;
        this.imageHorizontalUrl = imageHorizontalUrl;
        this.title = title;
        this.genres = genres;
        this.overview = overview;
        this.averageRating = averageRating;
        this.releaseDate = releaseDate;
        this.popularity = popularity;
        this.userRating = userRating;
        this.idFromApi = idFromApi;
        this.video = video;
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

    public List<Integer> getGenres() {
        return genres;
    }

    public void setGenres(List<Integer> genres) {
        this.genres = genres;
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

    public Long getIdFromApi() {
        return idFromApi;
    }

    public void setIdFromApi(Long idFromApi) {
        this.idFromApi = idFromApi;
    }

    public String getVideo() {
        return video;
    }

    public void setVideo(String video) {
        this.video = video;
    }

}
