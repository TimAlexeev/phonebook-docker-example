var express = require('express');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


const db = [
    {
    name: 'Vlad',
    phone: '7934345123',
    position: {name: 'Senior Developer', takeSince: new Date()},
    userpic: {}
}, {
    name: 'Tim',
    phone: '7905874535',
    position: {name: 'Senior Lead', takeSince: new Date()},
    userpic: {}
}, {
    name: 'Eugene',
    phone: '7907891002',
    position: {name: 'Support Manager', takeSince: new Date()},
    userpic: {}
}, {
    name: 'Victor',
    phone: '7890944943',
    position: {name: 'Sales Manager', takeSince: new Date()},
    userpic: {}
}, {
    name: 'Dmitry',
    phone: '7098477743',
    position: {name: 'IT manager', takeSince: new Date()},
    userpic: {}
}, {
    name: 'Alexey',
    phone: '78967536123',
    position: {name: 'Strategy Developer', takeSince: new Date()},
    userpic: {}
}, {
    name: 'Ivan',
    phone: '79084343434',
    position: {name: 'Senior Product Manager', takeSince: new Date()},
    userpic: {}
}, {
    name: 'Anton',
    phone: '74957445445',
    position: {name: 'Activity Developer', takeSince: new Date()},
    userpic: {}
}, {
    name: 'Innokentiy',
    phone: '79028433545',
    position: {name: 'Guitar Player', takeSince: new Date()},
    userpic: {}
}];

app.listen(3002, function() {
    console.log('Phonebook API is ready for requests.')
});

app.get('/contacts', (req, res) => {
    res.send(db)
})

app.get('/contact/:phone', (req, res) => {
    res.send(db.find(c => c.phone === req.params.phone))
})

app.post('/contact/create', (req, res) => {
    res.send('Привет :)')
})

app.post('/contact/delete/:id', (req, res) => {
    db = db.filter(c => c.phone !== req.params.id)
    res.send(204)
})

app.put('/contact/update/:id', (req, res) => {
    res.send('Привет :)')
})