package com.codeclan.example.server.models;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.ManyToOne;
import java.beans.ConstructorProperties;
import java.io.Serializable;
import java.util.Objects;

@SuppressWarnings("serial")
@Embeddable
public class MovieUserRatingId  implements Serializable {

//        @Column(name = "MOVIE_ID")
        private Long movieId;

//        @Column(name = "USER_ID")
        private Long userId;

        public Long getMovieId() {
                return movieId;
        }

        public void setMovieId(Long movieId) {
                this.movieId = movieId;
        }

        public Long getUserId() {
                return userId;
        }

        public void setUserId(Long userId) {
                this.userId = userId;
        }

        public int hashCode() {
                return Objects.hash(movieId, userId);
        }

        public boolean equals(Object object) {
               if (this == object)
                       return true;
               if (object == null || getClass() != object.getClass())
                       return false;
               MovieUserRatingId that = (MovieUserRatingId) object;
               return Objects.equals(movieId, that.movieId) && Objects.equals(userId, that.userId);
        }



}
