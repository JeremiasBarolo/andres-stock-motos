

        const { MarcaProvider } = require('../providers');

        const listAllMarca = async () => {
            return await MarcaProvider.listAllMarca();
        };

        const listOneMarca = async (Marca_id) => {
            return await MarcaProvider.listOneMarca(Marca_id);
        };

        const createMarca = async (MarcaData) => {
            return await MarcaProvider.createMarca(MarcaData);
        };


        const updateMarca = async (Marca_id, updateMarca) => {
            return await MarcaProvider.updateMarca(Marca_id, updateMarca);
        };

        const deleteMarca = async (Marca_id) => {
            return await MarcaProvider.deleteMarca(Marca_id);
        };


        module.exports = {
        listAllMarca, listOneMarca, createMarca, updateMarca, deleteMarca, 
        };

