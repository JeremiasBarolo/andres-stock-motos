

    var models = require('../models');

    const listAllchecklist= async () => {
    try {
        const checklist = await models.checklist.findAll(
        {
                include: [
                    {all:true}
                ]
            });
        console.log('✅ checklist were found');
        return checklist;
    } catch (err) {
        console.error('🛑 Error when fetching checklist', err);
        throw err;
    }
    };

    const listOnechecklist= async (checklist_id) => {
    try {
        const onechecklist= await models.checklist.findByPk(checklist_id, 
        );
        if (!onechecklist) {
        
        return null;
        }
        return onechecklist;
    } catch (err) {
        
        throw err;
    }
    };

    

    module.exports = {
    listAllchecklist, listOnechecklist
    };

