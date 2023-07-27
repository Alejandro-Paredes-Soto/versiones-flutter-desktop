
const fs = require('fs');
const path = require('path');
const zipFolder = require('folder-zip-sync');


exports.downloadVersion = async (req, res) => {
  
  try {

     
    const getFolderVersion = path.join(__dirname, '..', 'updateds');

    if (!fs.existsSync(getFolderVersion)) return console.log("No existe la carpeta updateds");

 
    const zipFilePath = path.join(__dirname, 'adv_residencial_salida.zip');


      
    zipFolder(sourceFolderPath, zipFilePath);
    
     res.download(zipFilePath, 'adv_residencial_salida.zip', (err) => {
      if (err) {
        console.error('Error al descargar el archivo ZIP:', err);
        res.status(500).send('Error al descargar el archivo ZIP');
      }
    
      // Eliminar el archivo ZIP después de la descarga
      fs.unlink(zipFilePath, (err) => {
        if (err) {
          console.error('Error al eliminar el archivo ZIP:', err);
        }
        console.log('Archivo ZIP eliminado');
      });
    });
  
    
  
  } catch (error) {
    return res.status(500).json({
       statusCode: 500,
       message: error.message,
       data: []
    })
  }
}

exports.findAllVersion = async (req, res) => {

  try {

    console.log("Peticion hecha");

     const getFolderVersion = path.join(__dirname, '..', 'updateds');

     if (!fs.existsSync(getFolderVersion)) return console.log("No existe la carpeta updateds")
     
     const listVersion = fs.readdirSync(getFolderVersion).reverse();

     return res.status(200).json({
      statusCode: 200,
      message: 'OK',
      data: listVersion
     });

  } catch (e) {
    return res.status(500).json({
      statusCode: 500,
      message: e.message,
      data: []
    })
  }
}