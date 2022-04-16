import React from 'react';
import { getOrigin } from '../../common/Common-functions'

const PageNotFound = (props) => {
  return (
    <div className="row d-flex aligns-items-center justify-content-center">
        <div className="col-md-12 col-sm-12">
            <div className="card shadow-lg rounded-lg mt-5 mx-auto not-found-element" style={{width: "30rem"}}>
                <h3 className="card-header display-1 text-muted text-center">
                    Ups...
                </h3>

                <div className="card-subtitle mt-3 mb-1 text-muted text-center">
                  Wyszukiwana strona nie została odnaleziona lub nastąpił nieoczekiwany błąd. 
                </div>

                <div className="card-body mx-auto">
                    <a type="button" href={getOrigin()} className="btn btn-sm btn-success text-white"> Powrót do strony głównej </a>
                </div>
            </div>
        </div>
    </div>
  )
};

export default PageNotFound;