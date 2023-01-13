// Accept name/art form /Gender/ phone
// number/Email/password/confirm password.


module.exports = (sequelize, DataTypes) => {
    const ArtistData = sequelize.define("artistreg", {
        name: {
            type: DataTypes.STRING
        },
        contact: {
            type: DataTypes.BIGINT
        },
        email: {
            type: DataTypes.STRING
        },
        art: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }

    })
    return ArtistData
}      