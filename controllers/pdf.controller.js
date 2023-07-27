const path = require('path')
const fs = require('fs')
const { createFolder } = require('./../fn/index')

exports.uploadPDF = async (req, res) => {

    const { pdfName } = req.body
  
        try{
            const routePdf = path.join(__dirname, '..', 'pdf')

            const existsFolder = await createFolder(routePdf)

            if (existsFolder.statusCode){
               
               const pdf = path.join(routePdf, `${pdfName}`);
                
               const validityExistPdf = fs.existsSync(pdf)

               if (validityExistPdf) {
                  
                 return res.json({
                    statusCode: 200,
                    message: pdfName,
                    file: res.download(pdf)
                 })
               } else {

                return res.json({
                    statusCode: 400,
                    message: 'El archivo seleccionado.'
                })
               }
            }
            

        } catch(_error){
            
            return res.json({
                statusCode: 500,
                message: _error.message
            })
        }

   
} 