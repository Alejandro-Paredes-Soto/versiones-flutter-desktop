const conn = require('./../db/index')
const fs = require('fs')
const path = require('path')

exports.add = async (req, res) => {
   
   try {
    const { tipo_encuesta, tipo_pregunta, titulo, fecha_inicio, fecha_fin, preguntas, pdfName } = req.body

    const routeFolderPdf = path.join(__dirname, '..', 'pdf')

    fs.mkdirSync(routeFolderPdf)

    if (fs.existsSync(routeFolderPdf)) {

        const [idEncuesta] = await conn.query('INSERT INTO encuestas_colonos (`idTipoEncuesta`, `titulo`, `fecha_inicio`, `fecha_fin`)' + `
        VALUES(${tipo_encuesta}, '${titulo}', '${fecha_inicio}', '${fecha_fin}')
     `)
     if (idEncuesta) {

         if (pdfName) {
            const pdf = `${idEncuesta}${pdfName.slice(-4)}`
            const destinoFilePdf = path.join(routeFolderPdf, pdf)
  
            const pdfStream = fs.createWriteStream(destinoFilePdf)
            req.pipe(pdfStream)
         }

         if (tipo_pregunta != 3 ){
             preguntas.forEach(async (pregunta) => {
                 const [idPregunta] = await conn.query('INSERT INTO preguntas_colonos (`idTipoPregunta`, `descripcion`, `idEncuesta`)' + `
                   VALUES (${tipo_pregunta}, '${pregunta.name}', ${idEncuesta})
                 `)
             })
 
         } else {
 
             preguntas.forEach(async (pregunta) => {
                 const [idPregunta] = await conn.query('INSERT INTO preguntas_colonos (`idTipoPregunta`, `descripcion`, `idEncuesta`)' + `
                 VALUES(${tipo_pregunta}, '${pregunta.name}', ${idEncuesta})
               `)
                 pregunta.opciones.forEach(async (opcion) => {
                    
                   const [idOpcion] = await conn.query('INSERT INTO opciones_colonos (`idPregunta`,`descripcion`)' + ` VALUES (${idPregunta},'${opcion.name}')`)         
                 })
             })
         }
         
     }
 
    
     return res.json({
        statusCode: 200,
        message: 'Encuesta creada'
     })
        
        
    }
 

   } catch (error) {
    
    return res.json({
        statusCode: 400,
        message: error.message
    })
   }
}

exports.findAll = async (req, res) => {

   try {
    
    const [allEncuestas] = await conn.query(`
    SELECT preguntas_colonos.descripcion AS pregunta, opciones_colonos.descripcion AS opcion FROM preguntas_colonos
    INNER JOIN opciones_colonos ON opciones_colonos.idPregunta = preguntas_colonos.idPregunta
    INNER JOIN encuestas_colonos ON preguntas_colonos.idEncuesta = encuestas_colonos.idEncuesta

    WHERE encuestas_colonos.idEstatus = 1 OR encuestas_colonos.idEstatus = 2
   `)
   

    return res.json({
        statusCode: 200,
        message: 'Bien!!',
        data: allEncuestas
    })

   } catch (error) {
    
     return res.json({
        statusCode: 200,
        message: error.message
    })
   }
}