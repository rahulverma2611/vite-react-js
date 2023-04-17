import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { REHYDRATION_SET_REHYDRATION_VALUE } from '~/actions/types';

import { CounterReducer } from '~/reducers/counter-reducer';
import { RehydrationReducer } from '~/reducers/rehydration-reducer';

const reducers = combineReducers({
    rehydration_store: RehydrationReducer,

    counter_store: CounterReducer,
});

let custom_config = {
    ...offlineConfig,
    persistOptions: {
        key: 'root',
        // whitelist: []
        blacklist: ['rehydration_store', 'another_store'],
    },
    persistCallback: () => {
        // setting is_rehydration value so that our screen renders when rehydration completes
        store.dispatch({ type: REHYDRATION_SET_REHYDRATION_VALUE });
    },
};

// const sentryReduxEnhancer = SentryLogger.createReduxEnhancer({
//     // Optionally pass options listed below
// });

const middlewares = [
    applyMiddleware(thunk),
    offline(custom_config),
    // sentryReduxEnhancer,
];

const enhancer = compose(...middlewares);

const store = createStore(reducers, enhancer);

export default store;
