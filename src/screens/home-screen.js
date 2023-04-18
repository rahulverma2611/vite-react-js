import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'wouter';

import { DecrementCounter, IncrementCounter } from '~/actions/counter-actions';

const HomeScreen = (props) => {
    const [_, setLocation] = useLocation();
    return (
        <>
            <div className="flex items-center justify-center">
                This is HomeScreen
            </div>
            <div className="flex w-24 cursor-pointer flex-col gap-4">
                <button
                    className="bg-blue-500 p-4"
                    onClick={() => setLocation('/about')}
                >
                    Go To About
                </button>
                <button onClick={() => setLocation('/contact')}>
                    Go To Contact
                </button>
            </div>
            <div className="">Counter Applications</div>
            <button onClick={() => props.Increment_Counter()}>+</button>
            {props.counter}
            <button onClick={() => props.Decrement_Counter()}>-</button>
        </>
    );
};

const mapStateToProps = (state) => ({
    counter: state.counter_store.counter,
});
const mapDispatchToProps = (dispatch) => ({
    Increment_Counter: () => dispatch(IncrementCounter()),
    Decrement_Counter: () => dispatch(DecrementCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

HomeScreen.propTypes = {
    Increment_Counter: PropTypes.func,
    Decrement_Counter: PropTypes.func,
    counter: PropTypes.number,
};
