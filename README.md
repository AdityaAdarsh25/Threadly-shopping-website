### Building the docker image

**Command**

```
docker buildx build --platform linux/amd64 -t <username>/<image_name> .
```

**Example**

```
docker buildx build --platform linux/amd64 -t aakashverma1124/threadly-user-authentication-service .
```

### Pushing the docker image

**Command**

```
docker push <username>/<image_name>
```

**Example**

```
docker push aakashverma1124/threadly-user-authentication-service
```

To run all the services via Docker compose after running `dockerize.sh` file, execute `docker compose up -d`

## How to connect to DB from local terminal to the DB running in Docker?

`psql -h localhost -p 5440 -U postgres -d threadly-product-db`

## Dummy Products

```sql
INSERT INTO products (
    id,
    brand,
    created_at,
    description,
    images,
    is_featured,
    name,
    price,
    rating,
    rating_count,
    slug,
    stock
) VALUES
(
    gen_random_uuid(),
    'POLO',
    '2025-08-20 09:10:00',
    'Men cotton slim fit casual shirt.',
    ARRAY['https://example.com/images/p1-1.jpg','https://example.com/images/p1-2.jpg'],
    TRUE,
    'Polo Casual Shirt',
    1999.99,
    4.3,
    120,
    'polo-casual-shirt',
    80
),
(
    gen_random_uuid(),
    'NIKE',
    '2025-08-21 10:15:00',
    'Comfortable running shoes for daily workouts.',
    ARRAY['https://example.com/images/p2-1.jpg'],
    TRUE,
    'Nike Running Shoes',
    5999.00,
    4.7,
    340,
    'nike-running-shoes',
    50
),
(
    gen_random_uuid(),
    'ADIDAS',
    '2025-08-21 11:00:00',
    'Breathable sports t-shirt for training.',
    ARRAY['https://example.com/images/p3-1.jpg'],
    FALSE,
    'Adidas Sports Tee',
    1499.50,
    4.2,
    210,
    'adidas-sports-tee',
    200
),
(
    gen_random_uuid(),
    'ZARA',
    '2025-08-22 12:30:00',
    'Women floral summer dress.',
    ARRAY['https://example.com/images/p4-1.jpg','https://example.com/images/p4-2.jpg'],
    TRUE,
    'Floral Summer Dress',
    2999.00,
    4.6,
    95,
    'floral-summer-dress',
    60
),
(
    gen_random_uuid(),
    'H&M',
    '2025-08-22 14:00:00',
    'Classic black denim jeans.',
    ARRAY['https://example.com/images/p5-1.jpg'],
    FALSE,
    'Black Denim Jeans',
    2499.00,
    4.1,
    180,
    'black-denim-jeans',
    120
),
(
    gen_random_uuid(),
    'LEVIS',
    '2025-08-23 09:45:00',
    'Original Levi’s blue jeans.',
    ARRAY['https://example.com/images/p6-1.jpg'],
    TRUE,
    'Levis Blue Jeans',
    3999.99,
    4.8,
    500,
    'levis-blue-jeans',
    90
),
(
    gen_random_uuid(),
    'PUMA',
    '2025-08-23 10:30:00',
    'Lightweight sports sneakers.',
    ARRAY['https://example.com/images/p7-1.jpg'],
    FALSE,
    'Puma Sneakers',
    4499.00,
    4.4,
    275,
    'puma-sneakers',
    70
),
(
    gen_random_uuid(),
    'REEBOK',
    '2025-08-23 11:15:00',
    'Training shoes with grip sole.',
    ARRAY['https://example.com/images/p8-1.jpg'],
    FALSE,
    'Reebok Trainer Shoes',
    3899.00,
    4.0,
    160,
    'reebok-trainer-shoes',
    65
),
(
    gen_random_uuid(),
    'APPLE',
    '2025-08-24 08:00:00',
    'Wireless earbuds with noise cancellation.',
    ARRAY['https://example.com/images/p9-1.jpg'],
    TRUE,
    'Wireless Earbuds',
    12999.00,
    4.9,
    800,
    'wireless-earbuds',
    40
),
(
    gen_random_uuid(),
    'SAMSUNG',
    '2025-08-24 09:00:00',
    'Smartwatch with fitness tracking.',
    ARRAY['https://example.com/images/p10-1.jpg'],
    TRUE,
    'Samsung Smartwatch',
    9999.00,
    4.5,
    420,
    'samsung-smartwatch',
    55
),
(
    gen_random_uuid(),
    'SONY',
    '2025-08-24 10:00:00',
    'Over-ear noise cancelling headphones.',
    ARRAY['https://example.com/images/p11-1.jpg'],
    TRUE,
    'Sony Headphones',
    15999.00,
    4.8,
    610,
    'sony-headphones',
    35
),
(
    gen_random_uuid(),
    'BOAT',
    '2025-08-24 11:00:00',
    'Affordable wired earphones.',
    ARRAY['https://example.com/images/p12-1.jpg'],
    FALSE,
    'Boat Wired Earphones',
    999.00,
    4.1,
    900,
    'boat-wired-earphones',
    300
),
(
    gen_random_uuid(),
    'DELL',
    '2025-08-24 12:00:00',
    '15-inch laptop for office work.',
    ARRAY['https://example.com/images/p13-1.jpg'],
    TRUE,
    'Dell Office Laptop',
    54999.00,
    4.4,
    150,
    'dell-office-laptop',
    25
),
(
    gen_random_uuid(),
    'HP',
    '2025-08-24 13:00:00',
    'All-in-one desktop computer.',
    ARRAY['https://example.com/images/p14-1.jpg'],
    FALSE,
    'HP Desktop PC',
    45999.00,
    4.2,
    110,
    'hp-desktop-pc',
    20
),
(
    gen_random_uuid(),
    'LENOVO',
    '2025-08-24 14:00:00',
    'Business laptop with SSD.',
    ARRAY['https://example.com/images/p15-1.jpg'],
    TRUE,
    'Lenovo ThinkPad',
    62999.00,
    4.6,
    290,
    'lenovo-thinkpad',
    30
),
(
    gen_random_uuid(),
    'ASUS',
    '2025-08-24 15:00:00',
    'Gaming laptop with RTX graphics.',
    ARRAY['https://example.com/images/p16-1.jpg'],
    TRUE,
    'Asus Gaming Laptop',
    89999.00,
    4.7,
    210,
    'asus-gaming-laptop',
    18
),
(
    gen_random_uuid(),
    'CANON',
    '2025-08-24 16:00:00',
    'DSLR camera for photography.',
    ARRAY['https://example.com/images/p17-1.jpg'],
    FALSE,
    'Canon DSLR Camera',
    47999.00,
    4.5,
    175,
    'canon-dslr-camera',
    22
),
(
    gen_random_uuid(),
    'NIKON',
    '2025-08-24 17:00:00',
    'Mirrorless camera compact design.',
    ARRAY['https://example.com/images/p18-1.jpg'],
    TRUE,
    'Nikon Mirrorless Camera',
    52999.00,
    4.6,
    140,
    'nikon-mirrorless-camera',
    19
),
(
    gen_random_uuid(),
    'LG',
    '2025-08-24 18:00:00',
    '55-inch 4K smart TV.',
    ARRAY['https://example.com/images/p19-1.jpg'],
    TRUE,
    'LG 4K Smart TV',
    64999.00,
    4.7,
    330,
    'lg-4k-smart-tv',
    27
),
(
    gen_random_uuid(),
    'SAMSUNG',
    '2025-08-24 19:00:00',
    'Double door refrigerator.',
    ARRAY['https://example.com/images/p20-1.jpg'],
    FALSE,
    'Samsung Refrigerator',
    38999.00,
    4.3,
    260,
    'samsung-refrigerator',
    15
);
```
