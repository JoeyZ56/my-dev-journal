CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  published_year INT,
  is_available BOOLEAN DEFAULT true
  );