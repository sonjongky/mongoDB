const index = (req,res) => {
    return res.status(200).json({
        message : "You request handle"
    })
}

module.exports = {
    index
}