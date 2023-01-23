const { truncate } = require("fs");

module.exports = function (sequelize, DataTypes) {
	const match_info = sequelize.define(
		"match_info",
		{
			match_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			mentor_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			mentee_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			deleted: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				default: false
			},
		},
		{
			sequelize,
			tableName: "match_info",
			timestamps: true,
		}
	);
	match_info.associate = (models) => {
		match_info.hasMany(models.user, {
			foreignKey: "id",
			sourceKey: "mentor_id",
			onDelete: 'cascade',
			allowNull: false,
		});
		match_info.hasMany(models.user, {
			foreignKey: "id",
			sourceKey: "mentee_id",
			allowNull: false,
		});
	};
	return match_info;
};