import { Sequelize } from "sequelize";

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USERNAME;
const dbHost = process.env.DB_HOST;
const dbType = process.env.DB_TYPE;
const dbPassword = process.env.DB_PASSWORD;

const dbConfigs = {
  define: {
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    modelName: 'singularName',
  },
  dialect: dbType,
  host: dbHost,
};

export default new Sequelize(dbName, dbUser, dbPassword, dbConfigs);
