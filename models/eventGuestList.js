module.exports = function (sequelize, DataTypes) {
    const EventGuestList = sequelize.define('eventguestlist', {
        guest_email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        guest_confirm: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    });

    EventGuestList.associate = (models) => {
        
        EventGuestList.hasMany(models.Events, {
            onDelete: "cascade"
        });
        
        EventGuestList.belongsTo(models.Events, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return EventGuestList;
}
