how to insert Data inside the Mongodb
db.name_collection.insertOne
db.name_collection.insertMany

Read Opreations In MongoDB
1 Find Method
db.expenses.find()--->
    Pura Data Find Karke deta hai
   Ye Jo Return Kar Raha Hai Vo
   Ek Arry nhi hai par par Arrys jaisa 
   dikh raha hai basically ye ek cursor hota hai

agr hamko actual arrys chahiye toh fir 
   db.expenses.find().toArray()
     db.expenses.find().toArray().constructor
       [Function: Array]

2 Specific Data Chahiye Fir
   db.expenses.find({ currency: "AUD" })
     hum yaha par aur bhi cheeze kar sakte hai 
     ex: or opreator ka use 
     db.expenses.find({
  $or: [
    { currency: "AUD" },
    { paymentMethod: "Debit Card" }
  ]
})



2FindOne 
   does not use cursor
   return object karta hai hamesha
    agar koi parameter na ho toh
    pahla document return karta hai
    db.expenses.findOne().constructor
     [Function: Object]
    aise expanse chahiye jo ki 200 se bade ho toh phir
    db.expenses.findOne({amount:151.99})
    now configuration object aur greater then oprator
    greator then opretor ---> db.expenses.findOne({amount:{$gt:200}})
    greater then aur equal to --> db.expenses.findOne({amount:{$gte:200}}) 
    less then operator ---> db.expenses.find({amount:{$lt:1000}})
    less then equal to operator ---> db.expenses.findOne({amount:{$lte:200}})





    

  MongoDB Data Insertion & Read Operations Guide (Hinglish)

Edit
+--------------------+
|  MongoDB Shell     |
+--------------------+
         |
         v
+--------------------+
| Query Builder      |  <-- Query banane ke liye filters & operators use karte hain
+--------------------+
         |
         v
+--------------------+
| Query Parser       |  <-- Query syntax ko parse karta hai
+--------------------+
         |
         v
+--------------------+
| Execution Engine   |  <-- Query optimize aur execute hoti hai
+--------------------+
         |
         v
+--------------------+
| Data Storage       |  <-- Data retrieve karta hai storage se
+--------------------+
         |
         v
+--------------------+
| Cursor/Result      |  <-- Result set ko cursor form mein return karta hai
+--------------------+
5. Interview Questions (Practice ke liye)
Insert Operations:

insertOne aur insertMany me kya difference hai?
MongoDB insert operation ko kaise acknowledge karta hai?

Read Operations:

MongoDB me cursor kya hota hai aur ye array se kaise alag hai?
find aur findOne me kya fark hai?
Kaise cursor ko array me convert karte hain?
Query Operators:

$gt aur $gte operators kya karte hain? Examples ke saath batayein.
$or operator ka use kaise karte hain multiple conditions ke liye?
Optimization & Performance:

Large number of documents return karne wali query ko optimize kaise karte hain?
Indexing ka MongoDB query performance par kya impact hota hai?
General Concepts:

MongoDB query processing ka flow kya hai? (Diagram ko refer karein)
6. Additional Tips
Type Conversion:
Date strings ko hamesha new Date() ke saath convert karo jisse date comparisons sahi ho sake.

Indexing:
Frequently queried fields par indexes create karo for better performance.

Schema Validation:
MongoDB ke newer versions mein schema validation use karke data consistency maintain karo.

Error Handling:
Insert aur query operations ke baad return values check karo taaki pata chal sake ke operation successful hua ya nahi.

Ye document aapko MongoDB mein data insert aur read karne ke concepts ko achhi tarah samajhne mein madad karega. Aap isko apne study notes ya interview preparation ke liye use kar sakte hain. Agar aapko aur examples ya further explanation chahiye, to pooch sakte hain!


# MongoDB Data Insert & Read Operations

## 1. Data Insert Karna (Insert Operations)

### a. `insertOne` ka Use

**Kya karta hai?**  
- Ek single document ko collection mein insert karta hai.

**Example:**

```js
db.expenses.insertOne({
  title: 'Gym membership',
  amount: 183.73,
  currency: 'EUR',
  date: new Date('2024-08-18T05:00:45.203Z'),
  category: 'Healthcare',
  paymentMethod: 'UPI'
});
