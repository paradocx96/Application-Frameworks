//Ex5
//============================================

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        return response.json();
    }).then(function (data) {
    console.log(data);
});

console.log("Done");

//============================================

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data));

//============================================

// fetch is a promise, Promise is a object.
// JavaScript is Asynchronous.

//============================================
//Example

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function (res) {
        return res.json();
    }).then(function (data) {
    console.log(data);
});

console.log("Finish");

//============================================

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => console.log(data));

//============================================