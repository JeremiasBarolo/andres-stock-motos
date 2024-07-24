
    const express = require('express');
    const router = express.Router();
    const {checklistController }= require('../controllers');
    const { authMiddleware } = require('../middleware');

    router.use(authMiddleware)

    router.get('/', checklistController.listAllchecklist);
    router.get('/:checklist_id', checklistController.listOnechecklist);
    

    module.exports = router;
    