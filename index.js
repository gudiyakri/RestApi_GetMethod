var express = require('express');
var mysql = require('mysql');
var cors = require ('cors');
var bodyparser = require('body-parser');
var app = express();



app.use(cors());
app.use(bodyparser.json());


app.listen('3005',()=>{
console.log('server is running....');
})



//mysql database connection
var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Gudiya@1234',
    database:'employee'  
});
//check db connection
db.connect((err)=>{
    if(err) throw err;
    else
    {
        console.log('database connected...');
    }
});
//Rest API
app.get('/api',(req,res)=>{
res.send('Api working');
});

//Read data
app.get('/api/read',(req,res)=>{
    console.log(req.body);
    //sql query
    let sql ='SELECT first_name,sex,client_name,total_sales  FROM employee INNER JOIN works_with ON employee.emp_id = works_with.emp_id INNER JOIN client ON works_with.client_id = client.client_id  where sex="M" AND client_name IN("FedEx","Lackawana Country")';
    db.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
    });
})






















