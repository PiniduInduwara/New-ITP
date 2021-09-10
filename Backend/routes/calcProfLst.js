const router = require('express').Router();
let calcProfLst = require('../models/calcProfLst.model');

//retrieve all
router.route('/').get((req, res) => {
    calcProfLst.find()
        .then(calcProfLst => res.json(calcProfLst))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create
router.route('/add').post((req, res) =>{

   

    const i1 = req.body.i1;
    const e1 = req.body.e1;

    const i2 = req.body.i2;
    const e2 = req.body.e2;

    const i3 = req.body.i3;
    const e3 = req.body.e3;

    const i4 = req.body.i4;
    const e4 = req.body.e4;

    const totalInc = parseInt(i1)+parseInt(i2)+parseInt(i3)+parseInt(i4);
    const totalExp = parseInt(e1)+parseInt(e2)+parseInt(e3)+parseInt(e4);
    const ProfLst = parseInt(totalInc)-parseInt(totalExp);

    const newExpenses = new calcProfLst({

        i1,
        e1,
        i2,
        e2,
        i3,
        e3,
        i4,
        e4,
        totalInc,
        totalExp,
        ProfLst

    });

    newExpenses.save()
        .then(() => res.json('New entry added.\n  Total Expenses: '+total))
        .catch(err => res.status(400).json('Error: ' + err));
});

//retrieve function 
router.route('/:id').get((req, res) => {
    calcProfLst.findById(req.params.id)
        .then(calcProfLst => res.json(calcProfLst))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete function
router.route('/:id').delete((req, res) => {
    calcProfLst.findByIdAndDelete(req.params.id)
        .then(() => res.json('Expense details deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update function
router.route('/update/:id').post((req, res) => {
    calcProfLst.findById(req.params.id)
        .then(calcProfLst => {
            calcProfLst.d1 = req.body.d1;
            calcProfLst.e1 = req.body.e1;
            calcProfLst.d2 = req.body.d2;
            calcProfLst.e2 = req.body.e2;
            calcProfLst.d3 = req.body.d3;
            calcProfLst.e3 = req.body.e3;
            calcProfLst.d4 = req.body.d4;
            calcProfLst.e4 = req.body.e4;
            calcProfLst.totalExp = req.body.totalExp;
        
            calcProfLst.save()
                .then(() => res.json('Expense details updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;