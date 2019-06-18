import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';

import sequelize from "../database/database";

export class Menssagem extends Model {
  public id!: number;
  public Menssagem?: Text;
}

Menssagem.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  menssagem: {
    type: DataTypes.TEXT,
  },
  AssianenteIDEnvio:{
    type:DataTypes.INTEGER
  }
}, {
    sequelize,
    tableName: 'menssagens',
  });