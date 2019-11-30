'use strict';

var mongoose = require('mongoose');

exports.list_all_needed_nutrients = function(req, res) {
    var neededNutrients = [
        {
            id: 1,
            label: 'Vitamin C',
            key: 'vitaminC',
            value: 100,
            unit: 'mg'
        },
        {
            id: 2,
            label: 'Vitamin A',
            key: 'vitaminA',
            value: 1.1,
            unit: 'mg'
        },
        {
            id: 3,
            label: 'Vitamin B1',
            key: 'vitaminB1',
            value: 1.3,
            unit: 'mg'
        },
        {
            id: 4,
            label: 'Vitamin B2',
            key: 'vitaminB2',
            value: 1.5,
            unit: 'mg'
        },
        {
            id: 5,
            label: 'Vitamin B12',
            key: 'vitaminB12',
            value: 3,
            unit: 'mcg'
        },
    ];

    res.json(neededNutrients);
};