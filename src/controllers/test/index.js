exports.testApiWithAuthMiddleware = async (req, res) => {
    res.status(200).send({message: "Test API is working with authentication"})
}

exports.testApiWithoutAuthMiddleware = async (req, res) => {
    res.status(200).send({message: "Test API is working without authentication"})
}
