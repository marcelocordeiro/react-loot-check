import rootReducer from './index';

describe('Root Reducer', () => {
    it('Initializes the default state', () => {
        expect(rootReducer({}, {})).toEqual({ balance: 0, bitcoin: {} });
    });
});