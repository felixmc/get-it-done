import Sequelize from 'sequelize'
import uuid from 'uuid'
import db from '../utils/db'

const Task = db.define('Task', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: uuid,
    allowNull: false,
  },
  // for nesting / indenting subtasks into other tasks
  parent: {
    type: Sequelize.UUID,
    references: {
      model: 'Tasks',
      key: 'id',
    },
    allowNull: true,
  },
  text: {
    type: Sequelize.STRING,
    defaultValue: '',
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM('incomplete', 'complete'),
    defaultValue: 'incomplete',
    allowNull: false,
  },
  list: {
    type: Sequelize.UUID,
    references: {
      model: 'Lists',
      key: 'id',
    },
    allowNull: true,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: false,
  },
})

export default Task
