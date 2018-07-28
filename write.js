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
    /* const result = await tasks.insertMany([
        {name: 'first Name', priority: 1},
        {name: 'second Name', priority: 2},
        {name: 'third Name', priority: 4},
        {name: 'fourth Name', priority: 3}
    ]) */
    //console.log(result)
    const taskItems = await tasks.find({}).toArray()
    console.log(taskItems)
})()