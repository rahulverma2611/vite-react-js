import { DECREMENT_COUNTER, INCREMENT_COUNTER } from '~/actions/types';

const INITIAL_STATE = {
    counter: 0,
};

export const CounterReducer = (state = INITIAL_STATE, action) => {
    let newState = Object.assign({}, state);
    if (action.type === INCREMENT_COUNTER) {
        newState.counter = state.counter + 1;
        return newState;
    }
    if (action.type === DECREMENT_COUNTER) {
        newState.counter = state.counter - 1;
        return newState;
    }
    return state;
};
