const dbConfig = require("../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)
sequelize.authenticate()
    .then(() => {
        console.log("connected..");
    })
    .catch((err) => {
        console.log(err);
    })







const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.UserNameEmail = require("./UserModel/userNameEmailModel")(sequelize, DataTypes)
db.UserData = require("./UserModel/userDataModel")(sequelize, DataTypes)
db.ArtistRegister=require("./ArtistModel/ArtistReg")(sequelize, DataTypes)
db.ArtistUploads=require("./ArtistModel/ArtistData")(sequelize, DataTypes)
db.ArtistEventTable=require("./EventModel/EventDataModel")(sequelize, DataTypes)
db.RegisteredPeopleData=require("./EventModel/RegisteredDetails")(sequelize, DataTypes)
db.sequelize.sync({ force:false })
    .then(() => {
        console.log("reSync done");
    })
db.ArtistRegister.hasMany(db.ArtistEventTable,{
    foreignKey: "artist_id"

})


db.ArtistEventTable.belongsTo(db.ArtistRegister,{
        foreignKey: "artist_id"
    })

db.ArtistEventTable.hasMany(db.RegisteredPeopleData,{
    foreignKey:"event_id"
})
db.RegisteredPeopleData.belongsTo(db.ArtistEventTable,{
    foreignKey:"event_id"
})

db.UserNameEmail.hasOne(db.UserData, {
    foreignKey: "user_id"
})
db.UserData.belongsTo(db.UserNameEmail,
    {
        foreignKey: "user_id"
    })
//user upload oneToMany relationship
db.ArtistRegister.hasMany(db.ArtistUploads,{
    foreignKey:"artist_id"

})
db.ArtistUploads.belongsTo(db.ArtistRegister,{
    foreignKey:"artist_id"
})

module.exports = db  