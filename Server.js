import dotenv from 'dotenv'
import mysql from 'mysql'
import express from 'express'
var app = express()
import path from 'path'
import router  from './route.js'
import cors from 'cors'
import bodyParser from 'body-parser'
dotenv.config()
const PORT = process.env.PORT
 const con = mysql.createConnection({
  host: "localhost",
  port:'3306',
  user: "root",
  password: "",
  database: "new_db"
});

con.connect(function (err) {
  // const sql ="DELETE FROM new_account";
  // con.query(sql,()=>{
  //   console.log("DELETED....");
  // })
  if (err) throw err;
  console.log("Connected!");
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
app.use('/', router)
router.options('/', cors())

if(process.env.NODE_ENV == 'production'){
  app.use(express.static('frontend/build'));
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
  })
}
app.listen(PORT, function () {
  console.log(`server is running on port ${PORT}`);
})
export default con;