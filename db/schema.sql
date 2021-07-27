DROP DATABASE IF EXISTS movie_db;
CREATE DATABASE movie_db;

USE movie_db;

CREATE TABLE movies (
    movie_score INT PRIMARY KEY, movie_name VARCHAR(100)
);

CREATE TABLE movie_id (
    id VARCHAR(8), movie_id INT PRIMARY KEY
);