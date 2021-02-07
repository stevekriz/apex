# Database Queries And Sample Results

## Summary
SQL query                                                                                                                                                                                                    | SQL initial bench | endpoint
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-------------------+----------------------------------------------
SELECT * FROM listings WHERE id IN (SELECT similar_listing_id FROM similar_listings WHERE primary_listing_id=400000);                                                                                        | 324.825 ms        | GET /api/similar_listings/:primary_listing_id
INSERT INTO listings (image_url, house_type, description, is_super_host, average_rating, number_of_beds, number_of_reviews, price_per_night) values ('string', 'string', 'string', false, 4.32, 3, 23, 332); | 6.104 ms          | POST /api/listings
UPDATE listings SET is_super_host=true WHERE id=1000005;                                                                                                                                                     | 0.322 ms          | PATCH /api/listings/:listing_id
DELETE FROM listings WHERE id=1000005;                                                                                                                                                                       | 0.281 ms          | DELETE /api/listings/:listing_id

## Similar listings resource

### GET /api/similar_listings/:primary_listing_id
```
=> sample query
SELECT * FROM listings WHERE id IN (SELECT similar_listing_id FROM similar_listings WHERE primary_listing_id=400000);

=> sample results
   id   |                        image_url                        |   house_type    |                  description                  | is_super_host | average_rating | number_of_beds | number_of_reviews | price_per_night
--------+---------------------------------------------------------+-----------------+-----------------------------------------------+---------------+----------------+----------------+-------------------+-----------------
 820369 | https://airbnbsdc.s3-us-west-1.amazonaws.com/104.webp   | consectetur     | dicta repellendus voluptas                    | t             |           1.33 |              1 |                31 |             872
  48451 | https://airbnbsdc.s3-us-west-1.amazonaws.com/210.webp   | est             | consectetur soluta ea                         | f             |           1.79 |              4 |                28 |             856
 760914 | https://airbnbsdc.s3-us-west-1.amazonaws.com/290.webp   | facere          | eos earum nostrum                             | f             |           1.56 |              4 |                37 |             677
 116554 | https://airbnbsdc.s3-us-west-1.amazonaws.com/346.webp   | quis            | hic qui ut                                    | f             |           4.40 |              1 |                40 |             295
 250193 | https://airbnbsdc.s3-us-west-1.amazonaws.com/190.webp   | quisquam        | culpa architecto cumque                       | t             |           2.01 |              2 |                33 |             493
 557541 | https://airbnbsdc.s3-us-west-1.amazonaws.com/7.webp     | quae            | alias libero repellat                         | t             |           4.72 |              2 |                33 |             569
 181026 | https://airbnbsdc.s3-us-west-1.amazonaws.com/61.webp    | a               | labore accusamus harum                        | t             |           2.51 |              3 |                39 |             109
 160065 | https://airbnbsdc.s3-us-west-1.amazonaws.com/283.webp   | sint            | eligendi tenetur nihil                        | t             |           2.94 |              5 |                41 |             252
=> sample benchmark
Time: 0.531 ms
```

## Listings resource

### POST /api/listings
```
=> sample query
INSERT INTO listings (image_url, house_type, description, is_super_host, average_rating, number_of_beds, number_of_reviews, price_per_night) values ('string', 'string', 'string', false, 4.32, 3, 23, 332);

=> sample results
INSERT 0 1

=> sample benchmark
Time: 6.104 ms
```
### PATCH /api/listings/:listing_id
```
=> sample query
UPDATE listings SET is_super_host=true WHERE id=1000005;

=> sample results
UPDATE 0

=> sample benchmark
Time: 0.322 ms
```
### DELETE /api/listings/:listing_id
```
=> sample query
DELETE FROM listings WHERE id=1000005;

=> sample results
DELETE 0

=> sample benchmark
Time: 0.281 ms
```
