import React from 'react';
import { shallow, mount } from 'enzyme';

import { Loot } from './Loot';

describe('Loot', () => {
    let loot = shallow(<Loot />);
    let props = { balance: 10, bitcoin: {} };

    it('Renders properly', () => {
        expect(loot).toMatchSnapshot();
    });

    describe('When mounted', () => {
        const mockFetchBitcoin = jest.fn();
        
        beforeEach(() => {
            props.fetchBitcoin = mockFetchBitcoin;
            loot = mount(<Loot {...props} />);
        });

        it('Dispatches the `fetchBitcoin()` method it receives from props', () => {
            expect(mockFetchBitcoin).toHaveBeenCalled();
        });
    });

    describe('When there are valid bitcoin props', () => {
        beforeEach(() => {
            props = { balance: 10, bitcoin: { bpi: { USD: { rate: '1,000' } } } };
            loot = shallow(<Loot {...props} />);
        });

        it('Displays the correct bitcoin value', () => {
            expect(loot.find('h3').text()).toEqual('Bitcoin balance: 0.01');
        });
    });
});