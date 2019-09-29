DROP DATABASE IF EXISTS movie_list;
CREATE DATABASE movie_list;
USE movie_list;

CREATE TABLE movies (
  id INT AUTO_INCREMENT PRIMARY KEY, 
  title VARCHAR(100)
);

INSERT INTO movies (title) VALUES("Mean Girls ")



-- .query is the only mysql method you need to know
