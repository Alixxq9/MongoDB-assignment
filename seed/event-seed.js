const mongoose = require('mongoose')
const Event = require('../models/Event')

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://adbuser:kB%23y%403SSGYmTrD8@cluster0.zmxwj9q.mongodb.net/?appName=Cluster0', { useNewUrlParser: true })
    .then(() => {
        console.log('connected to db succcesfuly...')
        seedEvents()
    })
    .catch((err) => console.log(err))

function seedEvents() {
    let newEvents = [
        new Event({
            title: 'beach cleaning at Muscat',
            description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
            location: 'Muscat',
            date: Date.now(),
            created_at: Date.now()
        }),
        new Event({
            title: 'beach cleaning at Oman',
            description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
            location: 'Oman',
            date: Date.now(),
            created_at: Date.now()
        }),
        new Event({
            title: 'beach cleaning at Sohar',
            description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
            location: 'Muscat',
            date: Date.now(),
            created_at: Date.now()
        }),
        new Event({
            title: 'beach cleaning at Nizwa',
            description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
            location: 'Nizwa',
            date: Date.now(),
            created_at: Date.now()
        }),
        new Event({
            title: 'beach cleaning at Sur',
            description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
            location: 'Sur',
            date: Date.now(),
            created_at: Date.now()
        }),
        new Event({
            title: 'beach cleaning at Sur',
            description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
            location: 'Sur',
            date: Date.now(),
            created_at: Date.now()
        }),
        new Event({
            title: 'beach cleaning at Sur',
            description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
            location: 'Sur',
            date: Date.now(),
            created_at: Date.now()
        }),
        new Event({
            title: 'beach cleaning at Sur',
            description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
            location: 'Sur',
            date: Date.now(),
            created_at: Date.now()
        }),
        new Event({
            title: 'beach cleaning at Sur',
            description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
            location: 'Sur',
            date: Date.now(),
            created_at: Date.now()
        }),
    ]

    let done = 0
    for (let i = 0; i < newEvents.length; i++) {
        newEvents[i].save()
            .then(() => {
                done++
                if (done === newEvents.length) {
                    console.log('All events saved')
                    mongoose.disconnect()
                }
            })
            .catch(err => {
                console.log(err)
                done++
                if (done === newEvents.length) {
                    mongoose.disconnect()
                }
            })
    }
}
