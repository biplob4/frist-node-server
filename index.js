const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World Iam vary good coder')
})

const users = [
    { id: 1, name: "biplob", age: 19, password: "123ki4354u",email:"biplob@.com" },
    { id: 2, name: "miraz", age: 19, password: "123ki4354u",email:"biplob@.com" },
    { id: 3, name: "siplob", age: 19, password: "123ki4354u",email:"biplob@.com" },
    { id: 4, name: "sihab", age: 19, password: "123ki4354u",email:"biplob@.com" },
    { id: 5, name: "milon", age: 19, password: "123ki4354u",email:"biplob@.com" }
]

app.get('/users', (req, res) => {
    if(req.query.name){
        const search = req.query.name;
        const messing = users.filter(user=>user.name.includes(search));
        res.send(messing)
    }
   else{
       res.send(users)
   }
})
app.post('/users', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})


app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    res.send(user)
})

app.listen(port, () => {
    console.log('iam very happy todey', port)
})