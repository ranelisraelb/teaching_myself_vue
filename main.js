//this is a vue app
//el stands for element in html
//this app uses template syntax
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

//bind elements to attributes
//v-bind attribute is called a directive.
//Directives are prefixed with v- to indicate that they are special attributes provided
//by vue.
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

//conditionals and loops
//app3.seen = false to make app-3 dissapear
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

//v-for directive can be used for displaying a list of items using data
//from an array
//in console, enter app4.todos.push({ text: 'New item' }). You should see a new item appended to the list.

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [{
                text: 'Learn JavaScript'
            },
            {
                text: 'Learn Vue'
            },
            {
                text: 'Build something awesome'
            }
        ]
    }
})

//handling user input
//use v-on directive to attatch event listeners that invoke methods
//on our Vue instances
//.split turns string into an array
//.reverse turns the array around
//.join turns the array into a string again
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})
//handling user input
//v-model directive makes two-way bind between form input and app state
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
})