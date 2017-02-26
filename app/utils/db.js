import Sequelize from 'sequelize'

export default new Sequelize('gid', null, null, {
  dialect: 'sqlite',
//  storage: './data/db.sqlite3',
})
