-- types of keys 

-- Primary Key: A column that uniquely identifies each row in a table and cannot be null.
-- Super Key: Any set of columns that can uniquely identify a row, even if it includes extra attributes.
-- Foreign Key: A column that links one table to another by referencing a primary key.

--clause

-- ORDER BY: Used to sort query results in ascending or descending order.
-- GROUP BY: Used to group rows that have the same values in specified columns.
-- WHERE: Used to filter rows before grouping or aggregation.
-- HAVING: Used to filter grouped results after aggregation.

-- aggregate functions 

-- SUM: Sums the total of numeric values in a column.
-- MAX: Returns the highest value in a column.
-- MIN: Returns the lowest value in a column.
-- AVG: Returns the average of numeric values in a column.
-- COUNT: Returns the number of rows or non-null values in a column.

-- COUNT(column_name) → counts only NON-NULL values
-- COUNT(*) → counts all rows (including NULLs)

-- joins 

-- INNER JOIN: Returns only the rows that have matching values in both tables.
-- LEFT JOIN: Returns all rows from the left table and matching rows from the right 
-- RIGHT JOIN: Returns all rows from the right table and matching rows from the left


-- OR OPERATOR 
-- The OR operator is used to filter records based on more than one condition.

-- AND OPERATOR  
-- The AND operator is used to filter records based on more than one condition.

-- basic queries 

-- Q) Show first name, last name, and gender of patients whose gender is 'M'
SELECT first_name, last_name , gender from patients where gender = "M";

-- Q)Show first name and last name of patients who does not have allergies. (null)
select first_name, last_name from patients where allergies is null;


-- medium level queries 

-- Q) Show unique birth years from patients and order them by ascending.
SELECT DISTINCT strftime('%Y', birth_date) AS birth_year  -- strftime is a date function in SQL and %Y  is used to reterive the year form the date 
FROM patients
ORDER BY birth_year ASC;

-- Q) Show first name and last name of patients who does not have allergies. (null)
select first_name, last_name from patients where allergies is null;

-- Q) Show patient_id, diagnosis from admissions. Find patients admitted multiple times for the same diagnosis.
select first_name, last_name from patients where allergies is null;

-- Q) Show first name, last name and role of every person that is either patient or doctor. The roles are either "Patient" or "Doctor"
select first_name, last_name,"Patient" As role from patients
union All
Select first_name, last_name, "Doctor" AS role from doctors;

-- Q) Show all allergies ordered by popularity. Remove NULL values from query.
select allergies, count(allergies) from patients where allergies is NOT NULL  group by allergies order by count(allergies) DESC;

-- Q)Show the province_id(s), sum of height; where the total sum of its patient's height is greater than or equal to 7,000.
select province_id, SUM(height) from patients group by province_id having sum(height) >= 7000;

-- Q) Show the difference between the largest weight and smallest weight for patients with the last name 'Maroni'

SELECT 
    (SELECT MAX(weight) FROM patients WHERE last_name = 'Maroni') 
  - (SELECT MIN(weight) FROM patients WHERE last_name = 'Maroni') 
  AS weight_difference;

-- Q) Show all columns for patient_id 542's most recent admission_date.
SELECT *
FROM admissions
WHERE patient_id = 542
AND admission_date = (
    SELECT MAX(admission_date)
    FROM admissions
    WHERE patient_id = 542
);

-- Q) Show patient_id and first_name from patients where their first_name start and ends with 's' and is at least 6 characters long.
select patient_id, first_name from patients where first_name like 's____%s';

-- Q) Show patient_id, first_name, last_name from patients whos diagnosis is 'Dementia'. Primary diagnosis is stored in the admissions table.
select p.patient_id, p.first_name, p.last_name from patients p join  admissions a On p.patient_id = a.patient_id and a.diagnosis='Dementia'

-- Q) Display every patient's first_name. Order the list by the length of each name and then by alphabetically.
select first_name from patients order by len(first_name), first_name

--Q) Show the total amount of male patients and the total amount of female patients in the patients table. Display the two results in the same row.

SELECT 
    SUM(gender = 'M') AS male_count,
    SUM(gender = 'F') AS female_count
FROM patients;

--Q) Show first and last name, allergies from patients which have allergies to either 'Penicillin' or 'Morphine'. Show results ordered ascending by allergies then by first_name then by last_name.
select first_name, last_name, allergies from patients where allergies='Penicillin' Or  allergies='Morphine'
order by allergies,first_name,last_name;

--Q) Show patient_id, diagnosis from admissions. Find patients admitted multiple times for the same diagnosis.
select patient_id, diagnosis from admissions group by patient_id, diagnosis having count(*)>1;


-- join

--Q) Show first_name, last_name, and the total number of admissions attended for each doctor. Every admission has been attended by a doctor.
select first_name, last_name, attending_doctor_id AS attendence from admissions a join doctors d on 
a.attending_doctor_id=d.doctor_id

-- Q) For each doctor, display their id, full name, and the first and last admission date they attended.
select d.doctor_id,d.first_name || ' ' || d.last_name, min(a.admission_date), max(a.admission_date) from doctors d join admissions
a on d.doctor_id =  a.attending_doctor_id group by doctor_id

-- Q) Display the total amount of patients for each province. Order by descending.
select p.province_name, count(pa.patient_id) from province_names p join 
patients pa on p.province_id=pa.province_id group by p.province_id order by count(*) DESC; 

-- Q) For every admission, display the patient's full name, their admission diagnosis, and their doctor's full name who diagnosed their problem.
select pa.first_name || ' ' || pa.last_name, a.diagnosis, d.first_name ||' '|| d.last_name
from patients pa 
join admissions a on pa.patient_id=a.patient_id join doctors d on a.attending_doctor_id = d.doctor_id;



