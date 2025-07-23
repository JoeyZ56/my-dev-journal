## What is JOIN?

    A JOIN connects rows from two tables based on a related column (usually a foreign key).

In your case:

    • orders.customer_id links to customers.id

### Basic JOIN types

```sql
Type        Description

INNER JOIN  Only includes rows that match in both tables

LEFT JOIN   Includes all from the left table, and matches from the right

RIGHT JOIN  Includes all from the right table, and matches from the left

FULL JOIN   Includes all rows from both tables (matched or not)

EX of INNER JOIN

SELECT
  customers.name,
  orders.product,
  orders.quantity
FROM
  customers
INNER JOIN
  orders
ON
  customers.id = orders.customer_id;
```

What’s happening here? ^

    •	SQL walks through every row in customers
    •	For each row, it looks for a matching customer_id in orders
    •	If it finds one, it returns a combined row
