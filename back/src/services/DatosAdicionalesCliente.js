

        const { DatosAdicionalesClienteProvider } = require('../providers');

        const listAllDatosAdicionalesCliente = async () => {
            return await DatosAdicionalesClienteProvider.listAllDatosAdicionalesCliente();
        };

        const listOneDatosAdicionalesCliente = async (DatosAdicionalesCliente_id) => {
            return await DatosAdicionalesClienteProvider.listOneDatosAdicionalesCliente(DatosAdicionalesCliente_id);
        };

        const createDatosAdicionalesCliente = async (DatosAdicionalesClienteData) => {
            return await DatosAdicionalesClienteProvider.createDatosAdicionalesCliente(DatosAdicionalesClienteData);
        };


        const updateDatosAdicionalesCliente = async (DatosAdicionalesCliente_id, updateDatosAdicionalesCliente) => {
            return await DatosAdicionalesClienteProvider.updateDatosAdicionalesCliente(DatosAdicionalesCliente_id, updateDatosAdicionalesCliente);
        };

        const deleteDatosAdicionalesCliente = async (DatosAdicionalesCliente_id) => {
            return await DatosAdicionalesClienteProvider.deleteDatosAdicionalesCliente(DatosAdicionalesCliente_id);
        };


        module.exports = {
        listAllDatosAdicionalesCliente, listOneDatosAdicionalesCliente, createDatosAdicionalesCliente, updateDatosAdicionalesCliente, deleteDatosAdicionalesCliente, 
        };

