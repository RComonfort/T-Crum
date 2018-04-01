module.exports = (sequelize, DataTypes) => {
    const Member_task = sequelize.define('Member_task', {

        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        member_id: {

            allowNull: false,
            type: DataTypes.INTEGER
        },

        task_id: {

            allowNull: false,
            type: DataTypes.INTEGER
        },
    });

    return Member_task;
};