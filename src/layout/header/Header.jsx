import React from 'react';
import PropTypes from 'prop-types';
import Headerright from '../../components/Button/Headerright';
import Headerleft from '../../components/Button/Headerleft';
import { Link,Navlink } from "react-router-dom";
header.propTypes = {
    
};

function header(props) {
    return (
        <div className='container-fluid'>
            <div className='row' style={{paddingTop:"10px",background:"#3c46cf"}}>
            <Headerleft />
            <Headerright />
             </div>
        </div>
    );
}

export default header;