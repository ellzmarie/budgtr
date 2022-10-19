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

// New
// GET /budgets/new
app.get('/budget/new', (req, res) => {
    res.render('new.ejs', {
        title: 'new'
    })
})

// Show
// GET /budgets/:index
app.get('/budget/:indexBudget', (req, res) => {
    res.render('show.ejs', {
        allBudget: budget[req.params.indexBudget],
        title: 'budget'    
    })
})


// POST /budgets
app.post('/budget', (req, res) => {
    budget.push(req.body)
    res.redirect('/budget')
})

// =======================================
//              LISTENER
// =======================================
app.listen(3001, (req, res) => {
    console.log("listening...")
})