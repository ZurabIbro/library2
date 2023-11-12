const GenreModel = require('../models/Genre.model')

module.exports.genresController = {
    addGenre: (req, res) => {
        GenreModel.create({
            name: req.body.name,
            description: req.body.description,
        }).then(() => res.json('genre added'))
    },
    getGenres: (req, res) => {
        GenreModel.find({})
        .then((data) => {
            res.json(data)
        })
    }

    
}