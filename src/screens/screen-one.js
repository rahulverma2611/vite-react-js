import React from 'react';
import { connect } from 'react-redux';

const ScreenOne = () => {
    return (
        <>
            <div>ScreenOne</div>
        </>
    );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ScreenOne);
