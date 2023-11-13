import React, { Component } from 'react';
import { getAllPurchases } from '../../../api/domains/purchasesApi';
import './AllPurchases.sass'
import Search from '../../search/Search';
import CardPurchaseElement from '../../cardPurchaseElement/CardPurchaseElement';

export default class AllPurchases extends Component {
    static displayName = AllPurchases.name;

    constructor(props) {
      super(props);
      this.state = { 
        page: 1,
        purchases: [], 
      };
      this.setPurchases = this.setPurchases.bind(this);
    }

    async componentDidMount() {
      const data = await getAllPurchases();
      this.setState({ purchases: data.response });
    }

    setPurchases(value) {
      this.setState({ purchases: value });
    }

    render() {
      return (
        <>
          <Search page={this.state.page} setSearchResult={this.setPurchases} />
          <div className='purchases-page'>
              <div className='purchases-page__row'>
                <div className='purchases-page__list-col-left'>
                  <CardPurchaseElement />
                </div>

                <div className='purchases-page__filter-col-right'>
                  <h1>AllPurchases</h1>
                  <p>Welcome to AllPurchases!</p>
                </div>
              </div>
            </div>          
        </>
      );
    }
}
