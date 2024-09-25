

const { PersonasService } = require("../services");


const listAllPersonas = async (req, res) => {
  try {
   
    const Personas = await PersonasService.listAllPersonas();
    res.json(Personas);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const mejoresEmpleados = async (req, res) => {
  try {
    
    const Personas = await PersonasService.mejoresEmpleados();
    res.json(Personas);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};


const mejoresClientes = async (req, res) => {
  try {
    
    const Personas = await PersonasService.mejoresClientes();
    res.json(Personas);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listAllEmpleados = async (req, res) => {
  try {

    const Personas = await PersonasService.listAllEmpleados();
    res.json(Personas);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};



const listAllProveedores = async (req, res) => {
  try {

    const Personas = await PersonasService.listAllProveedores();
    res.json(Personas);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listAllClientes = async (req, res) => {
  try {
    console.log('estoy aca');
    const Personas = await PersonasService.listAllClientes();
    res.json(Personas);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listOnePersonas = async (req, res) => {
  try {
    const id = req.params.Personas_id;
    const Personas = await PersonasService.listOnePersonas(id);
    res.json(Personas);

  } catch (err) {
    res.status(500).json({ action: "listOnePersonas", error: err.message });
  }

};

const createPersonas = async (req, res) => {

  try {
    const newPersonas = await PersonasService.createPersonas(req.body);

    res.json(newPersonas);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create Personas.' });
  }
};

const updatePersonas = async (req, res) => {

  try {
    const PersonasUpdate = await PersonasService.updatePersonas(req.params.Personas_id, req.body);
    res.json(PersonasUpdate);
  } catch (err) {
    res.status(500).json({ action: 'updatePersonas', error: err.message });
  }
};

const deletePersonas = async (req, res) => {
  const id = req.params.Personas_id;
  try {
    await PersonasService.deletePersonas(id);
    res.json('');
  } catch (err) {
    res.status(500).json({ action: 'deletePersonas', error: err.message });
  }
};



module.exports = {
  listAllPersonas, 
  listOnePersonas, 
  createPersonas, 
  updatePersonas, 
  deletePersonas, 
  listAllEmpleados,
  listAllProveedores,
  listAllClientes,
  mejoresEmpleados,
  mejoresClientes
};
