const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const calcIncSchema = new Schema({


    dep1: {
        type: String,
        required: true,
        unique: true,
        trim: true,

    },

    i1:{
        type: Number

    },

    dep2: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    i2:{
        type: Number

    },

    dep3: {
        type: String,
        required: true,
        unique: true,
        trim: true,

    },

    i3:{
        type: Number

    },
    
    dep4:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    i4:{
        type: Number

    },

    totalInc:{
        type: Number

    }

}, {
    timestamps: true,
});

const calcInc = mongoose.model("calcInc", calcIncSchema);

module.exports = calcInc;
