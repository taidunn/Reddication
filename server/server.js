var express = require('express');
var app = express()

var posts = [
    {
        author: "Tom",
        path: "c/cs1331/hw",
        tag: "hw",
        title: "Question 10.3 help",
        body: "So I tried to solve this using Euler's formula, but I'm stuck",
        id: "1",
        noOfUpVotes: 100,
        noOfDownVotes: 95,
        comments: []
    }
]


app.listen(8000, () => {
    console.log("Listening on port 8000");
})

app.route('/c/:course/:tag/:id').get((req, res) => {
    res.json(200, {posts})
})
