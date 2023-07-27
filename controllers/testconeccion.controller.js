const connectionDb = require('./../db/index')

exports.connection = async (req, res) => {
 
    try {
       
        const test = await connectionDb.authenticate()

        return res.json({
            statusCode: 200,
            message: 'Conectado',
            data: test
        })
    } catch (error) {
      
        return res.json({
            statusCode: 400,
            message: error.message
        })
    }
}