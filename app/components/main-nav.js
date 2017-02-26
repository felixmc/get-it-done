// @flow
import React, { Component } from 'react'
import { Link } from 'react-router'
import { Menu, Icon } from 'antd'
const { Item } = Menu

import styles from 'styles/main-nav.scss'

export default class MainNav extends Component {
  render () {
    return (
      <Menu theme='dark' defaultSelectedKeys={['inbox']} className={styles.menu}>
        <Item key='inbox' className={styles.menuItem}>
          <Link to='/'>
            <Icon type='inbox' />
            <p>Inbox</p>
          </Link>
        </Item>
        <Item key='projects' className={styles.menuItem}>
          <Link to='/projects'>
            <Icon type='book' />
            <p>Projects</p>
          </Link>
        </Item>
        <Item key='review' className={styles.menuItem}>
          <Link to='/review'>
            <Icon type='reload' />
            <p>Review</p>
          </Link>
        </Item>
      </Menu>
    )
  }
}
