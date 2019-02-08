module.exports = function(sequelize, DataTypes) {
    var Guests = sequelize.define("Guests", {
      
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      rsvp: DataTypes.BOOLEAN
    });

    Guests.associate = (models) => {

      Guests.belongsTo(models.Events, {
          foreignKey: {
              allowNull: false
          }
      });
  }; 

  return Guests;
};