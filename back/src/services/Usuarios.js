

        const { UsuariosProvider } = require('../providers');

        const listAllUsuarios = async () => {
            return await UsuariosProvider.listAllUsuarios();
        };

        const listOneUsuarios = async (Usuarios_id) => {
            return await UsuariosProvider.listOneUsuarios(Usuarios_id);
        };

        const createUsuarios = async (UsuariosData) => {
            return await UsuariosProvider.createUsuarios(UsuariosData);
        };


        const updateUsuarios = async (Usuarios_id, updateUsuarios) => {
            return await UsuariosProvider.updateUsuarios(Usuarios_id, updateUsuarios);
        };

        const updatePassword = async (Usuarios_id, updateUsuarios) => {
            return await UsuariosProvider.updatePassword(Usuarios_id, updateUsuarios);
        };

        const deleteUsuarios = async (Usuarios_id) => {
            return await UsuariosProvider.deleteUsuarios(Usuarios_id);
        };


        module.exports = {
        listAllUsuarios, 
        listOneUsuarios, 
        createUsuarios, 
        updateUsuarios, 
        deleteUsuarios, 
        updatePassword
        };

