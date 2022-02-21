package com.codeclan.example.server;
import com.codeclan.example.server.models.User;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class UserTests {

    User user1;

    @Before
    public void before() {
        user1 = new User("Fiona", "fiona.g@gmail.com", "888");
    }

    @Test
    public void hasName() {
        assertEquals("Fiona", user1.getUsername());
    }

    @Test
    public void hasEmail() {
        assertEquals("fiona.g@gmail.com", user1.getEmail());
    }

    @Test
    public void hasPassword() {
        assertEquals("888", user1.getPassword());
    }

}
