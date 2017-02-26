// @flow
import React, { Component } from 'react'

import styles from 'styles/app.scss'
import MainNav from '../components/main-nav'
import ListNav from '../components/list-nav'

export default class App extends Component {
  props: {
    children: HTMLElement
  };

  render () {
    return (
      <div className={styles.container}>
        <div className={styles.header}>

        </div>

        <div className={styles.wrapper}>
          <aside className={styles.sidebar}>
            <MainNav />
          </aside>
          <aside className={styles.lists}>
            <ListNav />
          </aside>
          <div className={styles.content}>
            {this.props.children}
          </div>
        </div>

        <footer className={styles.footer}>

        </footer>
      </div>
    )
  }
}
