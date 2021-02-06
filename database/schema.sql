DROP DATABASE IF EXISTS carousel;
CREATE DATABASE carousel;

\c carousel

CREATE TABLE IF NOT EXISTS listings (
  listing_id serial,
  image_url character(100) NOT NULL,
  house_type character(50) NOT NULL,
  description character(50) NOT NULL,
  is_super_host boolean DEFAULT false,
  average_rating decimal NOT NULL,
  number_of_beds integer NOT NULL,
  number_of_reviews integer NOT NULL,
  price_per_night integer NOT NULL,
  PRIMARY KEY (listing_id)
);

CREATE TABLE IF NOT EXISTS similar_listings (
  id serial,
  primary_listing_id integer NOT NULL,
  similar_listing_id integer NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (primary_listing_id) REFERENCES listings(listing_id) ON DELETE CASCADE,
  FOREIGN KEY (similar_listing_id) REFERENCES listings(listing_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS users (
  user_id serial,
  user_name character(25) NOT NULL,
  user_password character(25) NOT NULL,
  email character(40) NOT NULL,
  first_name character(25) NOT NULL,
  last_name character(25) NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE IF NOT EXISTS user_lists (
  user_list_id serial,
  users_id integer NOT NULL,
  stay_name character(50) NOT NULL,
  stay_pic character(100) NOT NULL,
  PRIMARY KEY (user_list_id),
  FOREIGN KEY (users_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS user_list_listings (
  id serial,
  user_lists_id integer NOT NULL,
  listing_id integer NOT NULL,
  FOREIGN KEY (user_lists_id) REFERENCES user_lists(user_list_id) ON DELETE CASCADE,
  FOREIGN KEY (listing_id) REFERENCES listings(listing_id) ON DELETE CASCADE
);

COPY listings(image_url, house_type, description, is_super_host, average_rating, number_of_beds, number_of_reviews, price_per_night) FROM '/Users/stevekriz/hr/sdc/carousel/database/CSV/listings.csv' WITH DELIMITER ',';
COPY similar_listings(primary_listing_id, similar_listing_id) FROM '/Users/stevekriz/hr/sdc/carousel/database/CSV/similarListings.csv' WITH DELIMITER ',';
COPY users(user_name, user_password, email, first_name, last_name) FROM '/Users/stevekriz/hr/sdc/carousel/database/CSV/users.csv' WITH DELIMITER ',';
COPY user_lists(users_id, stay_name, stay_pic) FROM '/Users/stevekriz/hr/sdc/carousel/database/CSV/userLists.csv' WITH DELIMITER ',';
COPY user_list_listings(user_lists_id, listing_id) FROM '/Users/stevekriz/hr/sdc/carousel/database/CSV/userListListings.csv' WITH DELIMITER ',';
