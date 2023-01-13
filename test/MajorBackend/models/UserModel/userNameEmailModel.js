module.exports = (sequelize, DataTypes) => {
    const UserEmailPassword = sequelize.define("userEmailPassword", {
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    })
    return UserEmailPassword
}