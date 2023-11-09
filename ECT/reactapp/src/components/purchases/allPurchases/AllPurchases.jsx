import { getPurchases } from "../../../api/domains/purchasesApi";
import React, { Component } from 'react';

export default class AllPurchases extends Component {
    static displayName = AllPurchases.name;

    constructor(props) {
      super(props);
      this.state = { forecasts: {}, };
    }

    componentDidMount() {
      // this.populateWeatherData();
      const response = getPurchases();
      this.setState({ forecasts: response })
    }

    render() {
        return (
          <div>
            <h1>AllPurchases</h1>
            <p>Welcome to AllPurchases!</p>
            {/* <button onClick={getPurchases} /> */}
          </div>
        );
    }

    async populateWeatherData() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
    }
}
