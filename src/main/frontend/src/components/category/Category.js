import React from 'react';
import { useParams } from "react-router-dom";

const Category = (props) => {
    const params = useParams();

    return (
        <div>
            <p>Category id = {params.categoryId}</p>
        </div>
    )
};

export default Category;