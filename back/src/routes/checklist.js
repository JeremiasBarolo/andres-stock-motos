
    const express = require('express');
    const router = express.Router();
    const {checklistController }= require('../controllers');
    

    router.get('/', checklistController.listAllchecklist);
    router.get('/:checklist_id', checklistController.listOnechecklist);
    

    module.exports = router;
    