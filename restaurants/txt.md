# MongoDB Query Categorization

## 1. Basic Retrieval Queries
1. Display all documents in the collection.
2. Display specific fields: `restaurant_id`, `name`, `borough`, `cuisine`.
3. Display the same fields but exclude `_id`.
4. Display `restaurant_id`, `name`, `borough`, `zip code`, excluding `_id`.

## 2. Filtering Data Based on Conditions
5. Find restaurants in the borough "Bronx".
6. Find the first 5 restaurants in "Bronx".
7. Skip the first 5 and get the next 5 restaurants in "Bronx".
8. Find restaurants with a score greater than 90.
9. Find restaurants with scores between 80 and 100.
10. Find restaurants with latitude less than `-95.754168`.
11. Find restaurants not serving "American" cuisine, with a grade score above 70 and latitude below `-65.754168`.
12. Same as above but without using `$and` operator.
13. Find restaurants that are not in "Brooklyn", serve cuisine other than "American", and have an "A" grade. Sort by cuisine in descending order.

## 3. String-Based Searches
14. Find restaurants whose name starts with "Wil".
15. Find restaurants whose name ends with "ces".
16. Find restaurants with "Reg" somewhere in their name.

## 4. Multiple Conditions & Logical Operators
17. Find restaurants in "Bronx" serving either "American" or "Chinese" cuisine.
18. Find restaurants in "Staten Island", "Queens", "Bronx", or "Brooklyn".
19. Find restaurants not in the above boroughs.
20. Find restaurants with scores not exceeding 10.
21. Find restaurants excluding "American" and "Chinese" cuisine or those whose name starts with "Wil".

## 5. Querying Based on Nested Data (Grades)
22. Find restaurants that received an "A" grade and scored 11 on `ISODate("2014-08-11T00:00:00Z")`.
23. Find restaurants where the 2nd element in the `grades` array is an "A" and scored 9 on `ISODate("2014-08-11T00:00:00Z")`.

## 6. Geographic Queries
24. Find restaurants where the 2nd coordinate value is between 42 and 52.

## 7. Sorting Queries
25. Sort restaurants by name in ascending order.
26. Sort restaurants by name in descending order.
27. Sort cuisine in ascending order and borough in descending order.

## 8. Field Existence Queries
28. Check if all addresses contain a street field.
29. Find all documents where `coord` field values are of type Double.

## 9. Modulo and Numeric Queries
30. Find restaurants where the score is divisible by 7.

## 10. Advanced String Queries
31. Find restaurants with "mon" anywhere in the name.
32. Find restaurants whose names start with "Mad".

## 11. Complex Filtering with Grade Scores
33. Find restaurants with at least one grade below 5.
34. Find restaurants with at least one grade below 5 in "Manhattan".
35. Find restaurants with at least one grade below 5 in "Manhattan" or "Brooklyn".
36. Find restaurants with at least one grade below 5 in "Manhattan" or "Brooklyn" that do not serve "American" cuisine.
37. Same as above but excluding "Chinese" cuisine as well.
38. Find restaurants with grades 2 and 6.
39. Find restaurants with grades 2 and 6 in "Manhattan".
40. Find restaurants with grades 2 and 6 in "Manhattan" or "Brooklyn".
41. Find restaurants with grades 2 and 6 in "Manhattan" or "Brooklyn" that do not serve "American" cuisine.
42. Same as above but excluding "Chinese" cuisine as well.

## 12. Using OR Conditions with Grades
43. Find restaurants with either grade 2 or grade 6.
44. Find restaurants with grade 2 or 6 in "Manhattan".
45. Find restaurants with grade 2 or 6 in "Manhattan" or "Brooklyn".
46. Find restaurants with grade 2 or 6 in "Manhattan" or "Brooklyn" that do not serve "American" cuisine.
47. Same as above but excluding "Chinese" cuisine as well.

## 13. Aggregation Queries
48. Find restaurants where all grades are above 5.
49. Find restaurants with all grades above 5 in "Manhattan".
50. Find restaurants with all grades above 5 in "Manhattan" or "Brooklyn".
51. Find the average score for each restaurant.
52. Find the highest score for each restaurant.
53. Find the lowest score for each restaurant.
54. Count the number of restaurants in each borough.
55. Count the number of restaurants for each cuisine.
56. Count the number of restaurants for each cuisine and borough.
57. Count the number of restaurants that received an "A" grade for each cuisine.
58. Count the number of restaurants that received an "A" grade for each borough.
59. Count the number of restaurants that received an "A" grade for each cuisine and borough.
60. Count the number of restaurants graded in each month of the year.
61. Find the average score for each cuisine.
62. Find the highest score for each cuisine.
63. Find the lowest score for each cuisine.
64. Find the average score for each borough.
65. Find the highest score for each borough.
66. Find the lowest score for each borough.

## 14. Date-Based Grade Queries
67. Find the name and address of restaurants that received an "A" grade on a specific date.
68. Find the name and address of restaurants that received a "B" or "C" grade on a specific date.
69. Find restaurants with at least one "A" and one "B" grade.
70. Find restaurants with at least one "A" grade and no "B" grades.
71. Find restaurants with at least one "A" grade and no "C" grades.
72. Find restaurants with at least one "A" grade, no "B", and no "C" grades.

## 15. Text Search Queries
73. Find restaurants with "coffee" in their name.
74. Find restaurants with zip codes starting with "10".
75. Find restaurants with cuisine names starting with "B".
76. Find restaurants with cuisine names ending with "y".
77. Find restaurants with cuisine names containing "Pizza".

## 16. Ranking & Analysis Queries
78. Find restaurants with the highest average score.
79. Find restaurants with the highest number of "A" grades.
80. Find the cuisine most likely to receive a "C" grade.
81. Find the restaurant with the highest average score for "Turkish" cuisine.
82. Find restaurants with the highest total score.
83. Find all Chinese restaurants in "Brooklyn".
84. Find the restaurant with the most recent grade date.
85. Find the top 5 restaurants with the highest average score for each cuisine.
86. Find the top 5 restaurants in each borough with the highest number of "A" grades.
87. Find the borough with the highest number of restaurants that have an "A" grade and a score of 90 or higher.

---
### Additional Questions for Practice
- How can we use `$regex` to perform complex string matching in restaurant names?
- How can we optimize a query that involves multiple `$or` conditions?
- How does indexing affect query performance in MongoDB?
- How can we use the `$lookup` stage in aggregation to join restaurant data with another collection?

This categorization makes it easier to navigate and practice MongoDB queries based on their use cases.

