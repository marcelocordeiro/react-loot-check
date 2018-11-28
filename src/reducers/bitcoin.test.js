import bitcoinReducer from './bitcoin';
import { FETCH_BITCOIN } from '../actions/constants';

describe('Bitcoin Reducer', () => {
    const bitcoinData = { bpi: 'bitcoin price index' };

    it('Fetches and sets the bitcoin data', () => {
        expect(bitcoinReducer({}, { type: FETCH_BITCOIN, bitcoin: bitcoinData })).toEqual(bitcoinData);
    });
});