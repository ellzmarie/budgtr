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
app.use(express.static('./public'))

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
    res.render('new.ejs')
})

// POST /budgets
app.post('/budget', (req,res) => {
    console.log(req.body)
    budget.push(req.body)
    res.redirect('/budget')
})

// Show
// GET /budgets/:index
app.get('/budget/:indexBudget', (req, res) => {
    res.render('show.ejs', {
        allBudget: budget[req.params.indexBudget]    
    })
})




// =======================================
//              LISTENER
// =======================================
app.listen(3001, (req, res) => {
    console.log("listening...")
})