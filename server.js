
const   express = require('express');
const app = express();


const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())



const database ={
    users:[]
}

app.get('/',(req,res)=>
{
    res.sendFile(__dirname + "/public/index.html");

})
app.get('/users',(req,res)=>
{
     res.send(database.users)
})



app.post('/register',(req,res)=>
{
    const {Firstname,Lastname,Email,Password} = req.body;
    database.users.push(
        {
            Firstname:Firstname,
            Lastname:Lastname,
            Email:Email,
            Password:Password
        }
    )
    res.send(" Recieved your Data " )
})




app.listen(3000);




 