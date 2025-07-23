--Get all orders with customer names
SELECT
    orders.id AS order_id, --Gets order id
    customers.name AS customer_name, -- customer name
    orders.product, --product ordered
    orders.quantity,    --quantity
    orders.order_date --order date
FROM orders
 JOIN customers ON orders.customer_id = customers.id; --Only return rows where the customer_id in orders matches the id in customers.