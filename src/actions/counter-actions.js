import { DECREMENT_COUNTER, INCREMENT_COUNTER } from '~/actions/types';

export const IncrementCounter = () => ({ type: INCREMENT_COUNTER });
export const DecrementCounter = () => ({ type: DECREMENT_COUNTER });
