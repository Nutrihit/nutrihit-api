'use strict';

module.exports = function(app) {
    var profile = require('../controllers/profileController');

    app.route('/profile')
        .get(profile.list_all_needed_nutrients);
};