import db from '../utils/db'

import Task from './task'
import List from './list'

db.sync()

const Models = {
  Task,
  List,
}

global.Models = Models

export default Models
