import React from 'react';
import Header from '../header/Header'

const LayoutWrapper = (props) => {
  return (
    <div>
        <Header/>
        <div>
            {props.children}
        </div>
    </div>
  )
};

export default LayoutWrapper;