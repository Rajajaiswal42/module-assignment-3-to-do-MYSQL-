const conn=require('./database')
//concept behind we add the data in mysql
exports.addtask=async(req,res,next)=>{
    const{thing}=req.body
    await conn.query(`INSERT INTO things(thing)VALUES(?)`,[thing],(err,result)=>{
      if(err)throw err
     res.send(result)
    })
     console.log("task added") 
    }

    // asynchronus middlware to give the all the data in frontend
//using sql querey to retrieve all the data
exports.getdata=async(req,res,next)=>{
    await conn.query(`SELECT * FROM things`,(Err,result)=>{
      if (Err) throw Err
      console.log(result)
      res.send(result)
    }) 
  }
 // concept behind deleting particular item

  exports.deletetask=async(req,res,next)=>{
    const id=req.params.id
    console.log(id)
    await conn.query(`DELETE FROM things WHERE id=? `,[id],(err,result)=>{
      if(err) throw err
      // console.log(result)
      res.send(result)
    })
  
   }