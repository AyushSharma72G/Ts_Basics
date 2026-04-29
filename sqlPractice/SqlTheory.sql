indexing in dbms 

indexing is a database performance optimization technique that speeds up data retrieval by creating a separate data structure to locate records without scanning every row in a table

the Create Index statement is used to create indexes on tables in database to speed up the data reterival

type of indexes 

1 Unique index : A unique index ensures that the indexed column(s) contain only unique values. That means no two rows can have the same value in that column.
2 Non Unique index: A non-unique index allows duplicate values in the indexed column(s). It is used to improve query performance without enforcing uniqueness.

example where non unique index can be useful

SELECT * FROM users WHERE city = 'Delhi'; 

database scans all the rows in the users table to find the matching records, 
which can be time-consuming if the table is large. 
By creating a non-unique index on the city column, the database can quickly locate the relevant rows without scanning the entire table, 
improving query performance.

CREATE INDEX idx_city ON users (city); -- this commmand creates a non unique index

city	row references  
Delhi	[1, 3, 5]
Mumbai	[2]
Pune	[4]


CREATE  UNIQUE INDEX idx_email ON users (email ); 

id	name	email
1	Ayush	ayush@gmail.com
2	Ravi	ravi@gmail.com
3	Neha	neha@gmail.com


-- Transactions & ACID Properties

Atomicity : Atomicity means a transacction is all or nothing w=either all the operations succeed or all of them fails 
this maintains consistency of the database and prevents partial updates that can lead to data corruption

Consistency : Consistency in transactions means that the database must remain in a valid state before and after a transaction.
A valid state follows all defined rules, constraints, and relationships (like primary keys, foreign keys, etc.).

Isolation: Isolation ensures that transactions run independently without affecting each other. 
Changes made by one transaction are not visible to others until they are committed.

it ensures that the result of the concurrent transactios is same as if they were executed onr after the other
it prevents dirty reads


Durability: Durability guarantees that once a transaction is committed, its changes are permanent and will survive any subsequent system failures.
This is typically achieved through the use of transaction logs and backup mechanisms.

commands used to achive acid properties
BEGIN TRANSACTION; -- starts a new transaction
COMMIT; -- commits the transaction, making all changes permanent
ROLLBACK; -- rolls back the transaction, undoing all changes made during the transaction    



exammple of transaction with savepoint

START TRANSACTION;

UPDATE accounts
SET balance = balance - 2000
WHERE account_id = 1;

SAVEPOINT after_deduct;

-- Mistake: wrong account id
UPDATE accounts
SET balance = balance + 2000
WHERE account_id = 99;

ROLLBACK TO after_deduct;

-- Correct query
UPDATE accounts
SET balance = balance + 2000
WHERE account_id = 2;

COMMIT;


-- UNION
Combines results of two or more SELECT queries and removes duplicates.

SELECT column1 FROM table1 UNION SELECT column1 FROM table2;

-- UNION ALL
Combines results but keeps duplicates.

SELECT name FROM Employees UNION ALL SELECT name FROM Managers;


-- INTERSECT

Returns only common rows from both queries.

SELECT name FROM Employees  INTERSECT SELECT name FROM Managers;

eg: Employees table
    name
    Ayush
    Rahul

   
   Managers table
    name
    Rahul
    Priya

    Output
    name
    Rahul


-- EXCEPT

Returns rows from first query that are not in second query.

SELECT name FROM Employees EXCEPT SELECT name FROM Managers;

Output
name
Ayush



-- Rules for Set Operators

Both queries must have:

Same number of columns
Same order of columns
Compatible data types

-- Subqueries 
A subquery in SQL is a query nested inside another SQL query.  the outer query uses the result from the inner query 

SELECT name FROM Employees WHERE department_id IN (SELECT department_id FROM Departments WHERE location = 'New York');


--  Correlated Subquery
A correlated subquery is a subquery that depends on the outer query for its values.
Executed once for each row of the outer query, making it slower for large datasets.

SELECT name FROM Employees e WHERE salary > (SELECT AVG(salary) FROM Employees WHERE department_id = e.department_id);


-- isolation levels in dbms 
1) Read Uncommitted :This is the lowest level of isolation where a transaction can see uncommitted changes made by other transactions. 
This can result in dirty reads, non-repeatable reads, and phantom reads.

2) Read Committed (fixes dirty reads): In this isolation level, a transaction can only see changes made by other committed transactions. 
 This eliminates dirty reads but can still result in non-repeatable reads and phantom reads.

3) Repeatable Read (fixes non-repeatable reads): This isolation level guarantees that a transaction will see the same data throughout its duration,
 even if other transactions commit changes to the data. However, phantom reads are still possible.

4) Serializable (fixes all anomalies including phantom reads) : This is the highest isolation level where a transaction is executed as if it were the only transaction in the system. 
All transactions must be executed sequentially, which ensures that there are no dirty reads, non-repeatable reads, or phantom reads.


Non Repeatable read
Non-repeatable read occurs when a transaction reads the same row twice and gets a different value each time.

Example:
suppose transaction T1 reads data. Due to concurrency, another transaction T2 updates the same data and commit, 
Now if transaction T1 rereads the same data, it will retrieve a different value.

Phantom Read:
Phantom Read occurs when two same queries are executed, but the rows retrieved by the two, are different.

Example:
suppose transaction T1 retrieves a set of rows that satisfy some search criteria. 
Now, Transaction T2 generates some new rows that match the search criteria for Transaction T1. 
If transaction T1 re-executes the statement that reads the rows, it gets a different set of rows this time.


-- inplementation of isolation levels in sql


-- window 1 
CREATE DATABASE my_database;
use my_database;

CREATE TABLE accounts (
    id INT PRIMARY KEY,
    balance INT
);

INSERT INTO accounts VALUES (1, 1000);

-- dirty reads
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
START TRANSACTION;

UPDATE accounts SET balance = 500 WHERE id = 1;
-- Havent commited this  data yet 

SELECT * FROM accounts;

-- fix the dirty read using the READ COMMITED 

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
START TRANSACTION;

UPDATE accounts SET balance = 200 WHERE id = 1;
SELECT * FROM accounts;  -- not committed that's why we will see 1000 when we select the accounts
COMMIT;

-- REPEATABLE READ

UPDATE accounts SET balance = 1000 WHERE id = 1;

SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
START TRANSACTION;

UPDATE accounts SET balance = 800 WHERE id = 1;
COMMIT;


-- seralizable 
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
START TRANSACTION;

SELECT * FROM accounts WHERE balance > 500;


-- window 2

use my_database;

SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
START TRANSACTION;

SELECT * FROM accounts; -- this gets the uncommited data of window 1 and shows balance as 500

UPDATE accounts SET balance = 1000 WHERE id = 1;



SELECT * FROM accounts; -- this gets the uncommited data of window 1 and shows balance as 1000 which solves the dirty read problem

SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
START TRANSACTION;

SELECT * FROM accounts; -- 1000


-- seralizable 

SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
START TRANSACTION;

INSERT INTO accounts VALUES (2, 700); --this will either wait or fails




-- SQL VIEWS 
A SQL view is basically a saved query that behaves like a virtual table.
Instead of writing the same complex query again and again, you store it as a view and use it like a normal table.


-- create a view 

CREATE VIEW high_salary_employees AS
SELECT name, salary
FROM employees
WHERE salary > 50000;

-- usage 

SELECT * FROM high_salary_employees;


view aslo helps in security we can hide sensitive columns 

CREATE VIEW employee_public AS
SELECT name, department
FROM employees;
-- Users won’t see salary