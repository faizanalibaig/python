import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../../config'; // adjust path

export class User extends Model {
  public id!: number;
  public username!: string;
}

// Initialize User model
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // ✅ Pass the Sequelize instance
    tableName: 'users', // optional
    modelName: 'User',
  }
);
export function create(arg0: { username: string }) {
  throw new Error('Function not implemented.');
}
