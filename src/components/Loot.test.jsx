import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Loot } from './Loot';

describe('Loot', ()=>{
    const loot = shallow(<Loot/>);

    it('renders properly', ()=>{
        expect(shallowToJson(loot)).toMatchSnapshot();
    });
});