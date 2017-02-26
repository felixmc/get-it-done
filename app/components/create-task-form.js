import React, { Component } from 'react'
import { Form, Input } from 'antd'

export default Form.create()(class CreateTaskForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.createTask({ text: values.task })
        this.props.form.setFieldsValue({ task: '' })
      }
    })
  }

  render () {
    const { styles } = this.props
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className={styles.form}>
        {getFieldDecorator('task', {
          rules: [{ required: true, message: 'Please enter a task!' }],
        })(
          <Input className={styles.input} size='large' placeholder='Create Task' onPressEnter={this.handleSubmit} />
        )}
      </Form>
    )
  }
})
