// Create web server
// 1. Create a web server
// 2. Create an array of comments
// 3. Create a route to get all comments
// 4. Create a route to post a comment
// 5. Create a route to get a comment by id
// 6. Create a route to update a comment by id
// 7. Create a route to delete a comment by id

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.json());

let comments = [
    {
        id: 1,
        username: 'Alice',
        comment: 'Hello World!'
    },
    {
        id: 2,
        username: 'Bob',
        comment: 'Hi Alice!'
    }
];

// Get all comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

// Post a comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.send('Comment is added to the database');
});

// Get a comment by id
app.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = comments.find(comment => comment.id === parseInt(id));
    res.send(comment);
});

// Update a comment by id
app.put('/comments/:id', (req, res) => {
    const id = req.params.id;
    const newComment = req.body;
    const index = comments.findIndex(comment => comment.id === parseInt(id));
    comments[index] = newComment;
    res.send('Comment is updated');
});

// Delete a comment by id
app.delete('/comments/:id', (req, res) => {
    const id = req.params.id;
    comments = comments.filter(comment => comment.id !== parseInt(id));
    res.send('Comment is deleted');
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});