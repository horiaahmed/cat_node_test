const express =require('express')
const {conectToDB,getdb}=require('./db')
const app=express()
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.json());

app.use(express.urlencoded({extended:true}))
// connect to db
let db
conectToDB((error)=>{
    if (!error) {
        app.listen(3000) 
    }
    db=getdb()

})

app.get('/home',(req,res)=>{
    let notes=[]
    db.collection('notes').find().forEach(note => {
        notes.push(note)})
    .then(()=>{res.render('home',{notes})})
    .catch((err=>{console.log(err);}))
    })

app.post('/newNote',(req,res)=>{
    console.log(req.body);
    db.collection('notes').insertOne(req.body)
    .then(()=>{
        res.redirect('/home')
    })
    .catch((err=>{console.log(err);}))
})


app.get('/newNote',(req,res)=>{
    res.render('newNote')
})
