

const { checklistService } = require("../services");


const listAllchecklist = async (req, res) => {
  try {
    const checklist = await checklistService.listAllchecklist();
    res.json(checklist);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listOnechecklist = async (req, res) => {
  try {
    const id = req.params.checklist_id;
    const checklist = await checklistService.listOnechecklist(id);
    res.json(checklist);

  } catch (err) {
    res.status(500).json({ action: "listOnechecklist", error: err.message });
  }

};



module.exports = {
  listAllchecklist, listOnechecklist
};
