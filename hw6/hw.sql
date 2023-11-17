--1:
SELECT * FROM film;
--2:
SELECT COUNT(*) FROM payment WHERE amount>3;
--3:
SELECT COUNT(DISTINCT district) FROM address;
--4:
SELECT * FROM film WHERE title LIKE 'J%';
--5:
SELECT * FROM language WHERE language_id in (1,5);
--6:
INSERT INTO language (name)
VALUES ('Ukrainian') RETURNING *;
--7:
INSERT INTO city(city,country_id)
VALUES('Hadiach',100) RETURNING *;
--8:
UPDATE city
SET city = 'Dnipro'
WHERE city_id = 601 RETURNING *;
--9:
CREATE TABLE users(
    user_id SERIAL,
    username text UNIQUE NOT NULL ,
    email text UNIQUE NOT NULL ,
    first_name text NOT NULL ,
    last_name text NOT NULL ,
    password text NOT NULL
);
INSERT INTO users(username, email, first_name, last_name, password)
VALUES('mavr','kivar2006@gmail.com','Kyryl','Varyvoda','qwerty') RETURNING *;
--10:
DELETE FROM users RETURNING *;