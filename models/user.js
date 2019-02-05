module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      pswd: DataTypes.STRING
    });

  User.associate = (models) => {

    User.hasMany(models.Events, {
      onDelete: "cascade"
    });
  };    

  return User;
};
