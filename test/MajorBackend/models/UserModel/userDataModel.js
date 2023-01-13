const { BOOLEAN } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    const UserData = sequelize.define("userdata", {
        name: {
            type: DataTypes.STRING
        },
        contact: {
            type: DataTypes.BIGINT
        },
        address: {
            type: DataTypes.TEXT
        },
        proffession: {
            type: DataTypes.STRING
        },
        // like_status: {
        //     type: DataTypes.BOOLEAN
        // },
        user_id:DataTypes.INTEGER
    })
    return UserData
}      