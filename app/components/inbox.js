// @flow
import React, { Component, PropTypes } from 'react'
import { Icon, Checkbox } from 'antd'
import { Motion, spring } from 'react-motion'

import styles from 'styles/inbox.scss'
import CreateForm from './create-task-form'

export default class Inbox extends Component {
  propsTypes = {
    createTask: PropTypes.func,
    tasks: PropTypes.array,
  }

  onCheck = () => {

  }

  render () {
//    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props
    return (
      <div>
        <header className={styles.header}>
          {/* <h2 className={styles.heading}><Icon type='inbox' /> Inbox</h2> */}
          <CreateForm createTask={this.props.createTask} styles={styles} />
        </header>
        <ul>
          {this.props.tasks.map(task => (
            <Motion defaultStyle={{opacity: 0}} style={{opacity: spring(1, {stiffness: 120, damping: 15})}} key={task.get('id')}>
              {interpolatingStyle => (
                <li className={styles.task} style={interpolatingStyle}>
                  <Checkbox onChange={this.onCheck}>{task.get('text')}</Checkbox>
                </li>
              )}
            </Motion>
          ))}
        </ul>
      </div>
    )
  }
}
