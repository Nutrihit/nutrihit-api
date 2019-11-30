'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NutrientSchema = new Schema({
     name: {
         type: String,
         required: 'Please enter the name'
     },
    microNutrients: [
        {
            label: String,
            key: String,
            value: Number,
            unit: {
                type: [{
                    type: String,
                    enum: ['g', 'mg', 'mcg']
                }],
                default: ['mg']
            }
        }
    ]
});

module.exports = mongoose.model('Nutrient', NutrientSchema);