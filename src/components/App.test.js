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
});