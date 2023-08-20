
//installing all  the dependencies 
var express=require("express")
var mysql=require("mysql")

var bodyparser=require("body-parser")
var cors=require("cors")
const conn=require('./database')
const controller=require('./controller')

//connecting to database
conn.connect()

const app=express()
//using cors policy to escape from cross site error 
app.use(cors())
app.use(bodyparser.json())
 


app.post('/Addlist',controller.addtask)

app.get('/getdata',controller.getdata)  

 app.delete("/delete/:id",controller.deletetask)




 
app.listen(5000,async()=>{ 
    console.log("server started")
})


