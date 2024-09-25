

        const { TareasProvider } = require('../providers');

        const listAllTareas = async () => {
            return await TareasProvider.listAllTareas();
        };

        const listTareasEmpleado = async (Tareas_id) => {
            return await TareasProvider.listTareasEmpleado(Tareas_id);
        };

        const listOneTareas = async (Tareas_id) => {
            return await TareasProvider.listOneTareas(Tareas_id);
        };

        const countHome = async () => {
            return await TareasProvider.countHome();
        };

        const createTareas = async (TareasData) => {
            return await TareasProvider.createTareas(TareasData);
        };


        const updateTareas = async (Tareas_id, updateTareas) => {
            return await TareasProvider.updateTareas(Tareas_id, updateTareas);
        };

        const deleteTareas = async (Tareas_id) => {
            return await TareasProvider.deleteTareas(Tareas_id);
        };


        module.exports = {
        listAllTareas, 
        listOneTareas, 
        createTareas, 
        updateTareas, 
        deleteTareas,
        listTareasEmpleado,
        countHome
        };

