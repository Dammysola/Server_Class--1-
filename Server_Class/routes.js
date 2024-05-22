const route = (extreme)=>{

    const User = {
        name: "Adelabu Adenuga Dammy",
        email: "dammyarowoshola@gmail.com",
        password: "Agarion Companire"
    }

    const UserList = []

    extreme.get("/home", (req, res)=>{
        console.log(req.url);
         res.status(200).send(JSON.stringify({Message:"hello My Love"}))
     });

     extreme.get("/express", (req, res)=>{
        // res.send("Hello Chilo")
        res.status(200).json({message: "hello"})
        //.send("I'm fulfilled")
    })
    
    extreme.get("/users", (req, res)=>{
        res.status(200).send(User)
    })

    extreme.post("/list", (req, res)=>{
        UserList.push('sample')
        res.status(200).json(UserList)
      })
}
module.exports = route