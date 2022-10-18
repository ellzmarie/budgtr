// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const budget = require('./models/budget.js');
const app = express()

// =======================================
//              DATABASE
// =======================================

app.use(express.urlencoded(({extended:false})))

// =======================================
//              ROUTES
// =======================================
app.get("/", (req,res) => {
    res.send("testing...")
})

// Index
// GET /budgets
app.get('/budget', (req, res) => {
    res.render('index.ejs', {
        allBudget: budget,
        title: 'index'
    })
})

// Show
// GET /budgets/:index
app.get('budget/:indexBudget', (req, res) => {
    res.send(budget[req.params.indexBudget])
})


// New
// GET /budgets/new
app.get('/budget/new', (req, res) => {
    res.render('new.ejs')
})

// Create
// POST /budgets


// =======================================
//              LISTENER
// =======================================
app.listen(3001, (req, res) => {
    console.log("listening...")
})