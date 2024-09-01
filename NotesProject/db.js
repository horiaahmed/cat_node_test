const {MongoClient}=require('mongodb')
let connectiondb
const conectToDB=(cb)=>{
    MongoClient.connect('mongodb://localhost:27017/NotesDB')
    .then((client=>{
        connectiondb=client.db()
        return cb()
    }))
    .catch((error)=>{
        console.log(error)
        return cb(error)
    })
}

module.exports={
   conectToDB,
   getdb: ()=> connectiondb
}