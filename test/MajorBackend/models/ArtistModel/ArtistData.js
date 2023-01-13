
module.exports = (sequelize, DataTypes) => {
    const ArtistUploadedData = sequelize.define("artistdata", {
        image: {
            type: DataTypes.TEXT
        },
        // audio: {
        //     type: DataTypes.STRING
        // },
        // video: {
        //     type: DataTypes.STRING
        // },
        artist_id: {
            type: DataTypes.INTEGER
        }
    })
    return ArtistUploadedData
}      