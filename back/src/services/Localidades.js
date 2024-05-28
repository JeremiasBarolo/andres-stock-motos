

        const { LocalidadesProvider } = require('../providers');

        const listAllLocalidades = async () => {
            return await LocalidadesProvider.listAllLocalidades();
        };

        const listOneLocalidades = async (Localidades_id) => {
            return await LocalidadesProvider.listOneLocalidades(Localidades_id);
        };

        const createLocalidades = async (LocalidadesData) => {
            return await LocalidadesProvider.createLocalidades(LocalidadesData);
        };


        const updateLocalidades = async (Localidades_id, updateLocalidades) => {
            return await LocalidadesProvider.updateLocalidades(Localidades_id, updateLocalidades);
        };

        const deleteLocalidades = async (Localidades_id) => {
            return await LocalidadesProvider.deleteLocalidades(Localidades_id);
        };


        module.exports = {
        listAllLocalidades, listOneLocalidades, createLocalidades, updateLocalidades, deleteLocalidades, 
        };

