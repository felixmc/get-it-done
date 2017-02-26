import Sequelize from 'sequelize'
import uuid from 'uuid'
import db from '../utils/db'

const List = db.define('List', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: uuid,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    defaultValue: 'new list',
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM('active', 'archived'),
    defaultValue: 'active',
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: false,
  },
})

export default List
