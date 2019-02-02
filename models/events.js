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

    _Event.associate = (models) => {
        _Event.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        _Event.belongsTo(models.EventGuestList, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return _Event;
}
