'use strict';

/**
 * Webpack Example
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

import React from 'react';
import apiClient from '../lib/api_client';
import List from './List';
import Pagination from './Pagination';

export default class Home extends React.Component {

  state = {};

  componentDidMount() {
    this.getListByPage(1);
  }

  getListByPage = (n) => {
    apiClient.getList({ page: n, limit: 12 })
      .then(list => this.setState({list}))
      .catch(err => console.error(err));
  };

  render() {
    return (
      <div>
        <List list={this.state.list}/>
        <Pagination selectPage={this.getListByPage}/>
      </div>
    );
  }
}
