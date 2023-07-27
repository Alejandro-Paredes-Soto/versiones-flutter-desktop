const db = require('./../db/index')

exports.login = async (req, res) => {

     return res.json({
        statusCode: 200,
        message: 'Logueado',
        files: [ 
              'archivo1.txt', 
              'archivo2.txt', 
              'archivo3.txt',
              'archivo4.txt'
            ]
        // data: [],
        // files: ['archivo.xlsx', 'word.wrd', 'miArchivoPowerPoint.pptx']
     })
}


exports.create = async (req, res) => {
   
   let { name } = req.body
  
   let [query] = await db.query('INSERT INTO usuarios (`nombre`) ' + `VALUES ('${name}')`)
     
   if (query) {
       
       return res.json({
         statusCode: 200
       })
   } else {
      return res.json({
         statusCode: 500
      })
   }
     
    
}

exports.findAll = async (req, res) => {

   let [get] = await db.query('SELECT * FROM usuarios')

   if (get) {
      
      return res.json(get)
   } else {
      return res.json([])
   }
}