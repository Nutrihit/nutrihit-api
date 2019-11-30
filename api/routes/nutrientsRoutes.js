'use strict';

module.exports = function(app) {
    var nutrihit = require('../controllers/nutrihitController');

    app.route('/nutrihit')
        .get(nutrihit.list_weekly_nutrihit);
};