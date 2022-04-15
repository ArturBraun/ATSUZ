import React from 'react';
import './Order-search.css'
import { sendPostRequest } from '../../services/ApiCall'
import { useState } from 'react';

const OrderSearch = (props) => {
  const [inputEmail, setInputEmail] = useState('')
  const [inputOrderId, setInputOrderId] = useState('')
  const [orderData, setOrderData] = useState('')

  const fetchData = async () => {  
    const orderDataRequest = {email: inputEmail, orderId: inputOrderId}  
    const dataFromServer = await sendPostRequest('api/v1/order-details', orderDataRequest)
    if(dataFromServer) {
      console.log(JSON.stringify(dataFromServer))
      setOrderData(dataFromServer)
    }
  }

  return (
    <div>
      {
        orderData ? (
          <div>{JSON.stringify(orderData)}</div>
        ): (
          <div className="container mt-5 mb-5 text-center">
            <div className="d-flex justify-content-center row">
              <div className="col-md-10">
                <div className="row justify-content-center">
                  <div className="col-10">
                    <h4 className="mt-5 mb-5">
                      Tutaj możesz sprawdzić detale swojego zamówienia. Wystarczy, że wpiszesz potrzebne informacje.
                    </h4>
                    <div className="form-inline d-flex justify-content-center h-25">
                      <input className="form-boarder form-control mb-3" placeholder="Adres email" onChange={e => setInputEmail(e.target.value)} />
                      <input className="form-boarder form-control mb-3 mx-1" placeholder="Numer zamówienia" onChange={e => setInputOrderId(e.target.value)} />
                      <button className="btn btn-success w-100 btn-round mb-3 btn-rised" type="button" onClick={fetchData}>
                        Sprawdź 
                      </button>
                    </div>
                    <p className="text-muted m-3">
                      Jako zespół sklepu elektronicznego dziękujemy, że jesteś z nami!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>   
  )
};

export default OrderSearch;