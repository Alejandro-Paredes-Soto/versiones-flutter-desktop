

exports.send = async (req, res) => {

    console.log(req.files)
    return res.json({
        statusCode: 200,
        files: req.files
    });
}