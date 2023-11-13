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
      this.setPurchases = this.setPurchases.bind(this)
    }

    async componentDidMount() {
      const data = await getAllPurchases();
      this.setState({ purchases: data.response });
    }

    setPurchases(value) {
      // console.log(purchases);
      this.setState({ purchases: value });
    }

    render() {
      return (
        <>
          <Search page={this.state.page} setSearchResult={this.setPurchases} />
          <h1>AllPurchases</h1>
          <p>Welcome to AllPurchases!</p>
        </>
      );
    }
}
