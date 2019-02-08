module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
        user_email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        user_password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    });

    
    User.associate = (models) => {

        User.hasMany(models.Events, {
          onDelete: "cascade"
        });
      };    
    
    return User;
}
