const fs = require('fs')


const createFolder = (folderPath) => {

    return new Promise((resolve, reject) => {
        fs.mkdir(folderPath, (_error) => {

            if (_error) {
                resolve({
                    statusCode: 500,
                    message: 'Ya existe la carpeta.'
                })
            } else {
               resolve({
                statusCode: 200,
                message: 'Carpeta creada'
               })
            }
        })
    });
}

module.exports  = {
    createFolder
}