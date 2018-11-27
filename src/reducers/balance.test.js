import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as constants from '../actions/constants';

describe('Balance Reducer', () => {
    describe('When initializing', () => {
        const balance = 10;

        it('Sets a balance', () => {
            expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance})).toEqual(balance);
        });

        describe('Then re-initializing', () => {
            it('Reads the balance from cookies', () => {
                expect(balanceReducer2(undefined, {})).toEqual(balance);
            });
        });
    });

    it('Deposits into the balance', () => {
        const deposit = 10;
        const initialState = 5;

        expect(balanceReducer(initialState, { type: constants.DEPOSIT, deposit})).toEqual(initialState + deposit);
    });

    it('Withdraws from the balance', () => {
        const withdraw = 10;
        const initialState = 15;

        expect(balanceReducer(initialState, { type: constants.WITHDRAW, withdraw})).toEqual(initialState - withdraw);
    });
});