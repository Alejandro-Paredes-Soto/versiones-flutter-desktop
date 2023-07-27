
exports.updateUser = async (req, res) => {

   const { name } = req.body;

   const data = [
       {
        id: 1,
        name: name
       },
        {
            id: 2,
            name: 'Sergio Ramos'
        },
        {
            id: 3,
            name: 'Fulano'
        }
   ];

    res.send(data)
}