## SQL GUIDE TO SUCCESS

Start psql:

    brew services start postgresql

Check if working:

    psql postgres

a prompt will appear like:

    postgres=#

to connect to database

    \c <database>

to cancel current command:

    ctrl + c

to get to database from the shell:

    \i <FULL PATH>

Check if table is there:

    \dt

```sql
          List of relations
 Schema |  Name  | Type  |  Owner
--------+--------+-------+---------
 public | books  | table | your_name
```

to inspect the structure of the table (column names, types, etc.)

    \d

---

### Creating a Database

```sql
CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  published_year INT,
  is_available BOOLEAN DEFAULT true
);
```

### Inserting data into database

```sql
INSERT INTO books (title, author, published_year)
VALUES
  ('The Hobbit', 'J.R.R. Tolkien', 1937),
  ('1984', 'George Orwell', 1949),
  ('To Kill a Mockingbird', 'Harper Lee', 1960);
```

### Query everything in the table

```sql
SELECT * FROM books;
```

### Update table

```sql
UPDATE books
SET title = 'Nineteen Eighty-Four'
WHERE id= 2
```

### Delete from table

```sql
DELETE FROM books
where id = 1
```

### Filter through table

```sql
SELECT * FROM books
WHERE author = 'Harper Lee';
```

### Filter through table (case sensitive)

```sql
SELECT * FROM books
WHERE title ILIKE '%kill%';
```

### Sorting results (e.g. by year or title)

```sql
SELECT * FROM books
ORDER BY published_year ASC;

SELECT * FROM books
ORDER BY published_year DESC;

SELECT * FROM books
ORDER BY title ASC;
```
