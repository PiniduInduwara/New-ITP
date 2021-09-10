const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const calcProfLstSchema = new Schema({

    
    i1:{
        type: Number

    },

    e1:{
        type: Number

    },

    i2:{
        type: Number

    },

    e2:{
        type: Number

    },

    i3:{
        type: Number

    },

    e3:{
        type: Number

    },

    i4:{
        type: Number

    },

    e4:{
        type: Number

    },

    
    totalInc:{
        type: Number

    },

    totalExp:{
        type: Number

    },

    ProfLst:{
        type: Number

    }

}, {
    timestamps: true,
});

const calcProfLst = mongoose.model("calcExp", calcProfLstSchema);

module.exports = calcProfLst;
