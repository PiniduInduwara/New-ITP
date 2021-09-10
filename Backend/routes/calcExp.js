const router = require('express').Router();
let calcExp = require('../models/calcExp.model');

//retrieve all
router.route('/').get((req, res) => {
    calcExp.find()
        .then(calcExp => res.json(calcExp))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create
router.route('/add').post((req, res) =>{

   

    const d1 = req.body.d1;
    const e1 = req.body.e1;

    const d2 = req.body.d2;
    const e2 = req.body.e2;

    const d3 = req.body.d3;
    const e3 = req.body.e3;

    const d4 = req.body.d4;
    const e4 = req.body.e4;

    const totalExp = parseInt(e1)+parseInt(e2)+parseInt(e3)+parseInt(e4);

    const newExpenses = new calcExp({

        d1,
        e1,
        d2,
        e2,
        d3,
        e3,
        d4,
        e4,
        totalExp

    });

    newExpenses.save()
        .then(() => res.json('New entry added.\n  Total Expenses: '+total))
        .catch(err => res.status(400).json('Error: ' + err));
});

//retrieve function 
router.route('/:id').get((req, res) => {
    calcExp.findById(req.params.id)
        .then(calcExp => res.json(calcExp))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete function
router.route('/:id').delete((req, res) => {
    calcExp.findByIdAndDelete(req.params.id)
        .then(() => res.json('Expense details deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update function
router.route('/update/:id').post((req, res) => {
    calcExp.findById(req.params.id)
        .then(calcExp => {
            calcExp.d1 = req.body.d1;
            calcExp.e1 = req.body.e1;
            calcExp.d2 = req.body.d2;
            calcExp.e2 = req.body.e2;
            calcExp.d3 = req.body.d3;
            calcExp.e3 = req.body.e3;
            calcExp.d4 = req.body.d4;
            calcExp.e4 = req.body.e4;
            calcExp.totalExp = req.body.totalExp;
        
            calcExp.save()
                .then(() => res.json('Expense details updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;