module.exports = function (sequelize, DataTypes) {
    const _Event = sequelize.define('event', {
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        place: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    
    
    Events.associate = (models) => {

        Events.hasMany(models.EventGuestList, {
            onDelete: "cascade"
        }); 

        Events.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    

    return _Event;
}
