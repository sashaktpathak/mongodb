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
    const taskItems = await tasks.find({
        //priority: {$nin: [1,2]}
        //priority: null
        /* $or: [
            {priority: null},
            {priority: {$gt: 1}}
        ] */
        /* $and: [
            {priority: {$lt: 3}},
            {priority: {$gt: 1}}
        ] */
        //$orderby: { priority : 1 }
    })
    ._addSpecial( "$orderby", { priority: -1 } )
    //.sort({priority: -1})
    .toArray()
    console.log(taskItems)
})()