module.exports = (sequelize, DataTypes) => {
    const RegisteredPeopleData = sequelize.define("event_reg_table", {
        participant_name: {
            type: DataTypes.STRING
        },
        participant_email: {
            type: DataTypes.STRING
        },
        transection_status: {
            type: DataTypes.BOOLEAN
        },
        event_id: {
            type: DataTypes.INTEGER
        }
    })
    return RegisteredPeopleData
}   