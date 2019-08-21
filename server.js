const express = require('express')
const controller = require('./eventController')
const app = express()
const port = 8080

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/events', (req, res) => {
    let x = controller.events()
    let text = "";
    for (let i = 0; i < x.length; i++) { 
    text += "<br>" + "<br>" + x[i].eventName + "<br>"
    text += x[i].location + "<br>"
    text += x[i].date + "<br>";
}
    res.set('Content-Type', 'text/html');
    res.send(new Buffer(`All Events: ${text}`));
    })

app.get('/version', (req, res) => {
    let x = controller.version()
    res.send(`This is version ${x}`)
    })

app.get('/eventscount', (req, res) => {
    let x = controller.events()
    res.send(`There are ${x.length} events`)
    })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))