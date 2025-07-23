--Create customer table
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--Create orders table
CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(id),
    product TEXT NOT NULL,
    quantity INT DEFAULT 1,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--Insert sample customers
INSERT INTO customers (name, email)
VALUES
    ('Alice Smith', 'alice@example.com'),
    ('Bob Johnson', 'bob@example.com'),
    ('Charlie Rose', 'charlie@example.com');

--Insert sample orders
INSERT INTO orders (customer_id, product, quantity)
VALUES 
    (1, 'Laptop', 1),
    (1, 'Mouse', 2),
    (2, 'Keyboard', 1),
    (3, 'Monitor', 2);