import React, { Component } from 'react';
import './Search.sass'
import CrossIcon from './../../assets/cross.svg?react';
import SearchIcon from './../../assets/search.svg?react';
import { getAllPurchases } from '../../api/domains/purchasesApi';

export default class Search extends Component {
    static displayName = Search.name;

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            page: props.page || '',
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClean = this.handleClean.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    async handleSubmit() {
        const data = await getAllPurchases(this.state.page, this.state.value);
        this.setState({ purchases: data.response });
    }

    handleClean() {
        this.setState({value: ''});
    }

    //todo make tooltip
    render() {
        return (
            <>
            <div className='search-field' onSubmit={this.handleSubmit}>
                <input 
                    className='search-field__label'
                    type='text'
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder='Введите полностью или часть номера, наименования закупки, идентификационного кода закупки (ИКЗ), наименования или ИНН Заказчика'
                />
                <div className={this.state.value? 'visible' : 'hidden'}>
                    <button onClick={this.handleClean} className='search-field__btn'>
                        <CrossIcon className='search-field__btn__icon' />
                    </button>
                </div>
                <button onClick={this.handleSubmit} className='search-field__btn'>
                    <SearchIcon className='search-field__btn__icon' />
                </button>
            </div>
            </>
        );
    }
}