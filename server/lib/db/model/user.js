const {DataTypes, Sequelize} = require('sequelize');

const create = async (sequelize) => {
    const userTable = await sequelize.define('user', {
        // Model attributes are defined here
        userIdx: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            onDelete: 'CASCADE',
        },
        id: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        name: {
            type: DataTypes.STRING
        },
        pw: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        sex: {
            type: DataTypes.INTEGER
        },
        date: {
            type: DataTypes.DATE,
            defalutValue: sequelize.literal('now()')
        },
    
    }, {
        // Other model options go here   timestamps: false,
        freezeTableName: true,
        timestamps: false,
    });

    userTable.associate = function (models) {
        // userTable.hasMany(models.board, 
        //     {foreignKey: 'userIdx',
        // });
        // userTable.hasMany(models.comment, 
        //     {foreignKey: 'userIdx',
        // });
    };

    return userTable;
}
module.exports = create; 