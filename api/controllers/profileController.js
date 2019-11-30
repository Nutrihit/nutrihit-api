'use strict';

var mongoose = require('mongoose');

exports.list_all_needed_nutrients = function(req, res) {
    var neededNutrients = [
        {
            label: 'Vitamin C',
            key: 'vitaminC',
            value: 100,
            unit: 'mg'
        },
        {
            label: 'Vitamin A',
            key: 'vitaminA',
            value: 1.1,
            unit: 'mg'
        },
        {
            label: 'Vitamin B1',
            key: 'vitaminB1',
            value: 1.3,
            unit: 'mg'
        },
        {
            label: 'Vitamin B2',
            key: 'vitaminB2',
            value: 1.5,
            unit: 'mg'
        },
        {
            label: 'Vitamin B12',
            key: 'vitaminB12',
            value: 3,
            unit: 'mcg'
        },
    ];

    res.json(neededNutrients);
};