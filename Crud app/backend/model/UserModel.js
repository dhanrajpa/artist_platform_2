module.exports = (sequelize, DataTypes) => {
    const UserData = sequelize.define("userdata", {
        name: {
            type: DataTypes.STRING
        },
        designation: {
            type: DataTypes.STRING
        },
        technology: {
            type: DataTypes.STRING
        },
        contact: {
            type: DataTypes.BIGINT
        },
        address: {
            type: DataTypes.TEXT
        },
        status: {
            type: DataTypes.BOOLEAN
        }

    })
    return UserData
}      