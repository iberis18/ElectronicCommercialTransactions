import React, { Component } from 'react';
import { getAllPurchases } from '../../../api/domains/purchasesApi';
import './AllPurchases.sass'
import Search from '../../search/Search';

export default class AllPurchases extends Component {
    static displayName = AllPurchases.name;

    constructor(props) {
      super(props);
      this.state = { 
        page: 1,
        purchases: [], 
      };
    }

    async componentDidMount() {
      const data = await getAllPurchases();
      this.setState({ purchases: data.response });
    }

    render() {
        return (
          <>
            <Search page={this.state.page} />
            <h1>AllPurchases</h1>
            <p>Welcome to AllPurchases!</p>
          </>
        );
    }
}
