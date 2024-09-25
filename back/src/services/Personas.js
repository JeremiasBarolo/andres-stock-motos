

        const { PersonasProvider } = require('../providers');

        const listAllPersonas = async () => {
            return await PersonasProvider.listAllPersonas();
        };

        const mejoresEmpleados = async () => {
            return await PersonasProvider.mejoresEmpleados();
        };

        const mejoresClientes = async () => {
            return await PersonasProvider.mejoresClientes();
        };

        const listAllEmpleados = async () => {
            return await PersonasProvider.listAllEmpleados();
        };

        const listAllProveedores = async () => {
            return await PersonasProvider.listAllProveedores();
        };

        const listAllClientes = async () => {
            return await PersonasProvider.listAllClientes();
        };

        const listOnePersonas = async (Personas_id) => {
            return await PersonasProvider.listOnePersonas(Personas_id);
        };

        const createPersonas = async (PersonasData) => {
            return await PersonasProvider.createPersonas(PersonasData);
        };


        const updatePersonas = async (Personas_id, updatePersonas) => {
            return await PersonasProvider.updatePersonas(Personas_id, updatePersonas);
        };

        const deletePersonas = async (Personas_id) => {
            return await PersonasProvider.deletePersonas(Personas_id);
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

