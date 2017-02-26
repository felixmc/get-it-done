import { createActions } from 'redux-actions'
import { Observable } from 'rxjs'
import { Task } from '../models'

export const actions = createActions('CREATE_TASK', 'SAVE_TASK')

export const epics = {
  createTaskEpic: (action$, store) =>
    action$.ofType(actions.createTask.toString())
      .mergeMap(({ payload }) => {
        const task = Task.create({
          text: payload.text,
        })

        return Observable.from(task)
        .map(task => actions.saveTask(task.dataValues))
      }),
}
