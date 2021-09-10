const router = require('express').Router();
let calcInc = require('../models/calcInc.model');

//retrieve all
router.route('/').get((req, res) => {
    calcInc.find()
        .then(calcInc => res.json(calcInc))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create
router.route('/add').post((req, res) =>{


    const dep1 = req.body.dep1;
    const i1 = req.body.i1;

    const dep2 = req.body.dep2;
    const i2 = req.body.i2;

    const dep3 = req.body.dep3;
    const i3 = req.body.i3;

    const dep4 = req.body.dep4;
    const i4 = req.body.i4;

    const totalInc = parseInt(i1)+parseInt(i2)+parseInt(i3)+parseInt(i4);

    const newIncome = new calcInc({

        dep1,
        i1,
        dep2,
        i2,
        dep3,
        i3,
        dep4,
        i4,
        totalInc,

    });

    newIncome.save()
        .then(() => res.json('New entry added.Total Expenses: '+total))
        .catch(err => res.status(400).json('Error: ' + err));
});

//retrieve function 
router.route('/:id').get((req, res) => {
    calcInc.findById(req.params.id)
        .then(calcInc => res.json(calcInc))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete function
router.route('/:id').delete((req, res) => {
    calcInc.findByIdAndDelete(req.params.id)
        .then(() => res.json('Expense details deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update function
router.route('/update/:id').post((req, res) => {
    calcInc.findById(req.params.id)
        .then(calcInc => {
            calcInc.dep1 = req.body.dep1;
            calcInc.i1 = req.body.i1;
            calcInc.dep2 = req.body.dep2;
            calcInc.i2 = req.body.i2;
            calcInc.dep3 = req.body.dep3;
            calcInc.i3 = req.body.i3;
            calcInc.dep4 = req.body.dep4;
            calcInc.i4 = req.body.i4;
            calcInc.totalInc = req.body.totalInc;
        
            calcInc.save()
                .then(() => res.json('Expense details updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;