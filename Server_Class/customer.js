const express = require('express')
const router = express.Router();

const customers = []

router.use(express.json())

router.get('/', (req, res)=>{
    res.send("this is the root DIR of customer Route")
});

//queries must have question mark
//http://localhost:3030/customer/create?name=ademide&level=senior (example of a query)
router.get('/create',(req,res)=>{
    console.log(req.query);
    // res.send("This is the create DIR")
    res.send(customers)
});
// params takes in parameter in its path/directory
//http://localhost:3030/customer/build/Tade/44 (example of Params)

router.get('/build/:name/:age',(req,res)=>{
    console.log(req.params);
    res.status(400).send({
        "name": "Hello"
    })
});

//how to get what you write in your body on postMan
router.get('/build',(req,res)=>{
    console.log(req.body);
    res.status(400).send({
        "name": "Hello"
    })
});

router.get('/builder',(req,res)=>{
    const {name, age,nickname} = req.body
   const data ={
    name: name,
    age: age,
    nickname: nickname 

    // name, age, nickname
   } 
   customers.push(data)
   console.log(customers);
   res.status(400).send(data)
}); 



router.get('/update', (req, res)=>{
    res.send('This is the update DIR of customer Route')
})
module.exports = router;

//for creating you use the post Method
//we use express to be able to create API