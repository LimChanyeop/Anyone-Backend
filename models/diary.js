const { truncate } = require("fs");

module.exports = function (sequelize, DataTypes) {
	const diary = sequelize.define(
		"diary",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			contents: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			status: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			tableName: "diary",
			timestamps: true,
		}
	);
	return diary;
};