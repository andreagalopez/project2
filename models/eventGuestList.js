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
        EventGuestList.belongsTo(models._Event, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return EventGuestList;
}
