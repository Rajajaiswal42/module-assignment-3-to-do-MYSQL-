
const mysql=require("mysql")
//implementing the database
const conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"your_password",
    database:"lists"
    
   
   })
   module.exports=conn