const mongoose = require('mongoose')

let db = mongoose.connect('mongodb+srv://dbuser:rjKJgr6BQnZT0QpF@cluster0.hntbx13.mongodb.net/', { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('connected to db succcesfuly...')
    }
})