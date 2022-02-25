package com.codeclan.example.server.models;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "genres")
public class Genre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "idFromApi")
    private int idFromApi;
    @Column(name = "name")
    private String name;

    @ManyToMany
    @JsonIgnoreProperties({"genres"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "movies_genres",
            joinColumns = { @JoinColumn (
                    name = "genre_id",
                    nullable = false,
                    updatable = false)
            },
            inverseJoinColumns = { @JoinColumn (
                    name = "movie_id",
                    nullable = false,
                    updatable = false)
            }
    )
    private List<Movie> movies;


    public Genre(int idFromApi, String name) {
        this.idFromApi = idFromApi;
        this.name = name;
        this.movies = new ArrayList<Movie>();
    }

    public Genre() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getIdFromApi() {
        return idFromApi;
    }

    public void setIdFromApi(int idFromApi) {
        this.idFromApi = idFromApi;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Movie> getMovies() {
        return movies;
    }

    public void setMovies(List<Movie> movies) {
        this.movies = movies;
    }

    public void addMovie(Movie movie) {
        this.movies.add(movie);
    }

}
