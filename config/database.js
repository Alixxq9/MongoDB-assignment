const mongoose = require('mongoose')

mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://adbuser:kB%23y%403SSGYmTrD8@cluster0.zmxwj9q.mongodb.net/?appName=Cluster0', { useNewUrlParser: true })
    .then(() => console.log('connected to db succcesfuly...'))
    .catch((err) => console.log(err))