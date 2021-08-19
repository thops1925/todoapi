const express = require('express');
const router = express.Router();
const List = require('../models/TodoModels');




//getting all

router.get('/', async (req, res) => {
    List.find()
        .then(todo => res.json(todo))
        .catch(err => res.json(err))
})

// getting one 

router.get('/:id', (req, res) => {
    List.findById(req.params.id)
        .then(list => res.json(list))
        .catch(err => res.status(500).send(err));
})
// creating one 

router.post('/create', (req, res) => {

    const username = req.body.username
    const email = req.body.email
    const todo = new List({
        username, email
    })
    todo.save()
        .then(todo => res.json(todo))
        .catch(err => res.status(500).send(err))
})

//edit one

router.post('/:id', (req, res) => {
    List.findById(req.params.id)
        .then(list => {
            list.username = req.body.username;
            list.email = req.body.email;

            list.save()
                .then(() => res.json('New Record'))
                .catch(err => res.status(400).json('Error :' + err));
        })
        .catch(err => res.status(500).send(err));
})


//delete onerror

router.delete('/delete/:id', (req, res) => {
    List.findByIdAndDelete(req.params.id)
        .then(() => res.json('record deleted'))
        .catch(err => res.status(400).json('Error :' + err));

})

module.exports = router