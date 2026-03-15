# Ice Cream Sales Analyzer

This project analyzes the sales data of an ice cream parlor using Node.js.

The solution uses only basic data structures like Arrays (Lists) and Maps as required in the assignment instructions.

Implementation uses only Arrays (Lists) and Maps as required by the assignment instructions.

No external libraries such as Pandas, Lodash, or database systems were used.

---

## Setup Instructions

1. Install Node.js

2. Clone or download the project

3. Run the program

node index.js

---

## Reports Generated

The program generates the following reports:

1. Total sales of the store
2. Month-wise sales totals
3. Most popular item (most quantity sold) each month with:
   - Minimum orders
   - Maximum orders
   - Average orders
4. Item generating the highest revenue each month
5. Month-to-month growth per item in percentage
6. Data validation checks

---

## Data Validation

The program detects the following inconsistencies:

- Unit Price × Quantity ≠ Total Price
- Quantity < 1
- Unit Price < 0
- Total Price < 0
- Malformed Date

---

# Assignment Questions

## 1. What was the most complex part of the assignment?

The most complex part of this assignment was calculating the month-to-month growth per item.  
This required grouping items by month and comparing the revenue of the same item between consecutive months.  
Handling missing items in previous months and ensuring accurate percentage calculation required careful data structuring using Maps.

---

## 2. Describe a bug you expect and how you would debug it.

A possible bug could occur while parsing the CSV data if there are unexpected commas or malformed rows.  
This could cause incorrect splitting of columns and lead to wrong data values.

To debug this issue, I would:
- Log the raw lines during parsing
- Check the number of columns after splitting
- Add validation to ensure each row contains the expected number of fields.

---

## 3. Does your solution handle larger datasets efficiently?

Yes. The solution processes the dataset in a single pass using Maps and Arrays.  
The time complexity is approximately O(n), where n is the number of rows in the dataset.

Since Maps provide efficient lookup and update operations, the program can scale to larger datasets without significant performance issues.