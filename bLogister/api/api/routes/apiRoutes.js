'use strict';

module.exports = app => {
    const apiController = require('../controllers/apiController');

    //api routes
    app.route('/tasks')
    .get(apiController.list_all_tasks)
    .post(apiController.create_a_task);

    app.route('/tasks/task:Id')
    .get(apiController.read_a_task)
    .put(apiController.update_a_task)
    .delete(apiController.delete_a_task);
};