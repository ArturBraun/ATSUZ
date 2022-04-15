import React from 'react';
import { getOrigin } from '../../common/Common-functions'

const PageNotFound = (props) => {
  return (
    <div class="row d-flex aligns-items-center justify-content-center">
        <div class="col-md-12 col-sm-12">
            <div class="card shadow-lg rounded-lg mt-5 mx-auto not-found-element" style={{width: "30rem"}}>
                <h3 class="card-header display-1 text-muted text-center">
                    Ups...
                </h3>

                <div class="card-subtitle mt-3 mb-1 text-muted text-center">
                  Wyszukiwana strona nie została odnaleziona lub nastąpił nieoczekiwany błąd. 
                </div>

                <div class="card-body mx-auto">
                    <a type="button" href={getOrigin()} class="btn btn-sm btn-success text-white"> Powrót do strony głównej </a>
                </div>
            </div>
        </div>
    </div>
  )
};

export default PageNotFound;