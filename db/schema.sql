CREATE DATABASE moving_canvas_db;
USE moving_canvas_db;

CREATE TABLE users
(
	id INT NOT NULL AUTO_INCREMENT,
	user_first_name VARCHAR(30),
	user_last_name VARCHAR(30),
	user_email VARCHAR(65) NOT NULL,
	user_password VARCHAR(30) NOT NULL,
	user_favorite_artist VARCHAR(65),
	user_favorite_piece VARCHAR(65),
	user_zip VARCHAR(10),
	user_pref_gender ENUM('m', 'f'),
	user_pref_certified BOOLEAN,
	PRIMARY KEY (id)
);

CREATE TABLE artists
(
	id INT NOT NULL AUTO_INCREMENT,
	artist_first_name VARCHAR(30) NOT NULL,
	artist_last_name VARCHAR(30) NOT NULL,
	artist_gender ENUM('m', 'f') NOT NULL,
	artist_email VARCHAR(65) NOT NULL,
	artist_password VARCHAR(30) NOT NULL,
	artist_phone VARCHAR(20),
	artist_studio VARCHAR(65),
	artist_certified BOOLEAN NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE studios
(
	id INT NOT NULL AUTO_INCREMENT,
	studio_name VARCHAR(65) NOT NULL,
	studio_address VARCHAR(65),
	studio_city VARCHAR(30),
	studio_state VARCHAR(30),
	studio_zip VARCHAR(10),
	PRIMARY KEY (id)
);