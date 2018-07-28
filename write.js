const {MongoClient} =require('mongodb');
const monogUrl = 'mongodb://localhost:27017';
/* mongodb.connect(monogUrl)
    .then(mongoClient=>{
        mongoClient.db('mydatabase')
    })
    .catch(err=>console.log(err); */
(async ()=> {
    const client  = await MongoClient.connect(monogUrl)
    const mydb = client.db('mydatabase')
    console.log(mydb)
    const tasks = mydb.collection('tasks')
     const result = await tasks.insertMany([
        {name: 'some Name'},
        {name: 'some other Name'},
        {name: 'another Name'},
        {name: 'some another Name'}
    ]) 
    console.log(result)
})()