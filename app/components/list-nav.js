// @flow
import React, { Component } from 'react'
import { Input, Tree } from 'antd'
const TreeNode = Tree.TreeNode
const Search = Input.Search

import styles from 'styles/list-nav.scss'

const gData = []

const getParentKey = (key, tree) => {
  let parentKey
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i]
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
        parentKey = node.key
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children)
      }
    }
  }
  return parentKey
}

export default class SearchTree extends Component {
  state = {
    expandedKeys: [],
    searchValue: '',
    autoExpandParent: true,
  }

  onExpand = (expandedKeys) => {
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    })
  }

  onChange = (e) => {
    const value = e.target.value
    const expandedKeys = []
    dataList.forEach((item) => {
      if (item.key.indexOf(value) > -1) {
        expandedKeys.push(getParentKey(item.key, gData))
      }
    })
    const uniqueExpandedKeys = []
    expandedKeys.forEach((item) => {
      if (item && uniqueExpandedKeys.indexOf(item) === -1) {
        uniqueExpandedKeys.push(item)
      }
    })
    this.setState({
      expandedKeys: uniqueExpandedKeys,
      searchValue: value,
      autoExpandParent: true,
    })
  }

  render() {
    const { searchValue, expandedKeys, autoExpandParent } = this.state
    const loop = data => data.map((item) => {
      const index = item.key.search(searchValue)
      const beforeStr = item.key.substr(0, index)
      const afterStr = item.key.substr(index + searchValue.length)
      const title = index > -1 ? (
        <span>
          {beforeStr}
          <span className="ant-tree-searchable-filter">{searchValue}</span>
          {afterStr}
        </span>
      ) : <span>{item.key}</span>
      if (item.children) {
        return (
          <TreeNode key={item.key} title={title}>
            {loop(item.children)}
          </TreeNode>
        )
      }
      return <TreeNode key={item.key} title={title} />
    })

    return (
      <div>
        <Search
          style={{ width: 200 }}
          placeholder="Search"
          onChange={this.onChange}
        />
        <Tree
          onExpand={this.onExpand}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
        >
          {loop(gData)}
        </Tree>
      </div>
    )
  }
}
