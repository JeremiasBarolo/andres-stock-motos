

    var models = require('../models');

    const listAllTipoServicio= async () => {
    try {
        const TipoServicio = await models.TipoServicio.findAll(
        {
                include: [
                    {all:true}
                ]
            });
        console.log('✅ TipoServicio were found');
        return TipoServicio;
    } catch (err) {
        console.error('🛑 Error when fetching TipoServicio', err);
        throw err;
    }
    };

    const listOneTipoServicio= async (TipoServicio_id) => {
    try {
        const oneTipoServicio= await models.TipoServicio.findByPk(TipoServicio_id, 
        );
        if (!oneTipoServicio) {
        
        return null;
        }
        return oneTipoServicio;
    } catch (err) {
        
        throw err;
    }
    };

    


    module.exports = {
    listAllTipoServicio, listOneTipoServicio
    };

