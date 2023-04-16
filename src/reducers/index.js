import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { REHYDRATION_SET_REHYDRATION_VALUE } from '~/actions/types';

import { RehydrationReducer } from '~/reducers/rehydration-reducer';
