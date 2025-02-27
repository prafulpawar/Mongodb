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