module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      pswd: DataTypes.STRING
    });
    return User;
};
  