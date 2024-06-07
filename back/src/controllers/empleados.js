

const { PersonasService } = require("../services");


const listAllEmpleados = async (req, res) => {
  try {
    console.log('estoy aca');
    const Personas = await PersonasService.listAllEmpleados();
    res.json(Personas);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};




module.exports = {
   listAllEmpleados
};
