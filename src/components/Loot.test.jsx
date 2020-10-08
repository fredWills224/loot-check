import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson, mountToJson } from 'enzyme-to-json';
import { Loot } from './Loot';

describe('Loot', ()=>{
    const mockFetchbitcoin = jest.fn();
    const props = { balance: 10, bitcoin: {}, fetchBitcoin: mockFetchbitcoin}
    let loot = shallow(<Loot {...props} />);

    it('renders properly', ()=>{
        expect(shallowToJson(loot)).toMatchSnapshot();
    });

    describe('when mounted', ()=>{

        beforeEach(()=>{
            props.fetchBitcoin = mockFetchbitcoin;
            loot = mountToJson(<Loot {...props} />);
        });

        it('dispatches the `fetchBitcoin()` method it receives from props', () =>{
            expect(mockFetchbitcoin).toHaveBeenCalled();
        });

    });

});