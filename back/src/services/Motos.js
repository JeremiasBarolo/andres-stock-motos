

        const { MotosProvider } = require('../providers');

        const listAllMotos = async () => {
            return await MotosProvider.listAllMotos();
        };
        const listAllMotosUsadas = async () => {
            return await MotosProvider.listAllMotosUsadas();
        };

        const listAllMotosConsignacion = async () => {
            return await MotosProvider.listAllMotosConsignacion();
        };
        const listAllMotosNuevas = async () => {
            return await MotosProvider.listAllMotosNuevas();
        };

        const listOneMotos = async (Motos_id) => {
            return await MotosProvider.listOneMotos(Motos_id);
        };

        const createMotos = async (MotosData) => {
            return await MotosProvider.createMotos(MotosData);
        };


        const updateMotos = async (Motos_id, updateMotos) => {
            return await MotosProvider.updateMotos(Motos_id, updateMotos);
        };

        const deleteMotos = async (Motos_id) => {
            return await MotosProvider.deleteMotos(Motos_id);
        };


        module.exports = {
        listAllMotos, 
        listOneMotos, 
        createMotos, 
        updateMotos, 
        deleteMotos,
        listAllMotosNuevas,
        listAllMotosUsadas,
        listAllMotosConsignacion

        };

