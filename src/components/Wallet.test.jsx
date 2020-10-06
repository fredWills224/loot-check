import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Wallet } from './Wallet';

describe('Wallet', ()=>{
    const props = { balance: 20 };
    const wallet = shallow(<Wallet {...props} />);

    it('renders properly', ()=>{
        expect(shallowToJson(wallet)).toMatchSnapshot();
    });

    it('displays the balance from props', ()=>{
        expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20');
    });

});