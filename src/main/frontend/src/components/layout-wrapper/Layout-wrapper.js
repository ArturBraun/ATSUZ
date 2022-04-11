import React from 'react';
import Header from '../header/Header'
import { useEffect } from 'react';

const LayoutWrapper = (props) => {
  useEffect(() => {
    document.title = "Sklep elektroniczny"
  }, []);

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