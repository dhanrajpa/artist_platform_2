module.exports = (sequelize, DataTypes) => {
    const EventData = sequelize.define("event_table", {
        event_name: {
            type: DataTypes.STRING
        },
        event_fees: {
            type: DataTypes.BIGINT
        },
        registration_count: {
            type: DataTypes.INTEGER
        },
        artist_id: {
            type: DataTypes.INTEGER
        }
    })
    return EventData
}   