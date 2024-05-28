

        const { RolProvider } = require('../providers');

        const listAllRol = async () => {
            return await RolProvider.listAllRol();
        };

        const listOneRol = async (Rol_id) => {
            return await RolProvider.listOneRol(Rol_id);
        };

        const createRol = async (RolData) => {
            return await RolProvider.createRol(RolData);
        };


        const updateRol = async (Rol_id, updateRol) => {
            return await RolProvider.updateRol(Rol_id, updateRol);
        };

        const deleteRol = async (Rol_id) => {
            return await RolProvider.deleteRol(Rol_id);
        };


        module.exports = {
        listAllRol, listOneRol, createRol, updateRol, deleteRol, 
        };

