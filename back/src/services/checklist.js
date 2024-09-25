

        const { checklistProvider } = require('../providers');

        const listAllchecklist = async () => {
            return await checklistProvider.listAllchecklist();
        };

        const listOnechecklist = async (checklist_id) => {
            return await checklistProvider.listOnechecklist(checklist_id);
        };

       

        module.exports = {
        listAllchecklist, listOnechecklist
        };

