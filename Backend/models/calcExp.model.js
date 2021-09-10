const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const calcExpSchema = new Schema({

    

    d1: {
        type: String,
        required: true,
        unique: true,
        trim: true,

    },

    e1:{
        type: Number

    },

    d2: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    e2:{
        type: Number

    },

    d3: {
        type: String,
        required: true,
        unique: true,
        trim: true,

    },

    e3:{
        type: Number

    },

    d4:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    e4:{
        type: Number

    },

    totalExp:{
        type: Number

    }

}, {
    timestamps: true,
});

const calcExp = mongoose.model("calcExp", calcExpSchema);

module.exports = calcExp;
