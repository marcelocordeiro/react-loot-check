import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
    const app = shallow(<App />);

    it('Renders properly', () => {
        expect(app).toMatchSnapshot();
    });

    it('Contais a connected `Wallet` component', () => {
        expect(app.find('Connect(Wallet)').exists()).toBe(true);
    })

    it('Contains a connected `Loot` component', () => {
        expect(app.find('Connect(Loot)').exists()).toBe(true);
    });

    it('Contains a link to the coindesk price page', () => {
        expect(app.find('a').props().href).toBe('https://www.coindesk.com/price');
    });
});