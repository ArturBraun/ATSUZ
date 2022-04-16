import React from 'react';
import { useParams } from "react-router-dom";
import ProductList from '../product-list/Product-list';
import { useEffect, useState } from 'react';
import { sendPostRequest, sendGetRequest } from '../../services/ApiCall'
import { 
    getOrigin, 
    getShoppingCartContent, 
    getCartElementById, 
    addToShoppingCart, 
    deleteFromShoppingCart,
    clearCart 
} from '../../common/Common-functions'
import Image from '../image/Image';
import loading from '../icons/loading.svg'
import PlacedOrderModal from '../placed-order-modal/Placed-order-modal';
import { Modal } from 'bootstrap'

const ShoppingCart = (props) => {
    const params = useParams();
    const [products, setProducts] = useState('')
    const [cartEvent, setCartEvent] = useState(false)
    const [orderId, setOrderId] = useState('')

    //ui inputs
    const [nameInput, setNameInput] = useState('')
    const [surnameInput, setSurnameInput] = useState('')
    const [addressInput, setAddressInput] = useState('')
    const [cityInput, setCityInput] = useState('')
    const [zipInput, setZipInput] = useState('')
    const [paymentInput, setPaymentInput] = useState('PAYMENT_BY_CASH')
    const [emailInput, setEmailInput] = useState('')
    const [phoneInput, setPhoneInput] = useState('')

    const calculateCartPrice = () => {
        const cartContent = getShoppingCartContent();
        let sum = 0;
        products.map(product => {
            const cartElem = getCartElementById(product.id);
            if(cartElem) sum = sum + cartElem.amount * product.price;
        })
        return sum;
    }

    const addToCart = (productId) => {
        addToShoppingCart(productId)
        setCartEvent(!cartEvent)
    }

    const deleteFromCart = (productId) => {
        deleteFromShoppingCart(productId)
        setCartEvent(!cartEvent)
    }

    useEffect( () => {    
      const fetchData = async () => {
        const cartContent = getShoppingCartContent()
        if(cartContent){
            const idsList = cartContent.map(element => element.productId).join(',')  
            const dataFromServer = await sendGetRequest(`/api/v1/products?ids=${idsList}`)
            setProducts(dataFromServer)
        }        
      }
      fetchData()
    }, [cartEvent])

    const placeOrder = () => {        
        const fetchData = async () => {
            const cartContent = getShoppingCartContent()
            console.log(JSON.stringify(nameInput))
            if(cartContent){  
                const orderData = {
                    name: nameInput,
                    surname: surnameInput,
                    address: addressInput,
                    postcode: zipInput,
                    city: cityInput,
                    email: emailInput,
                    phoneNumber: phoneInput,
                    paymentMethod: paymentInput,
                    productOrders: cartContent
                }
                const dataFromServer = await sendPostRequest("/api/v1/order", orderData)
                if(dataFromServer) {
                    clearCart()
                    console.log(`Zamowienie o id = ${dataFromServer.id} zostalo zlozone`)
                    setProducts([])
                    setOrderId(dataFromServer.id)
                    const orderCompleteModal = new Modal(document.getElementById('orderPlacedModal'));
                    orderCompleteModal.show();
                }                
            }          
        }
        fetchData()
    }

    return (
        <div>
            <div className="container mt-5 mb-5 text-center">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-10 d-flex justify-content-center">
                        <div className="col-10">
                            <div className="form-inline d-flex justify-content-center">
                                <h4 className="form-boarder form-control mb-3">
                                    {
                                        products.length > 0 ? (
                                            "Twój koszyk"
                                        ) : (
                                            "Twój koszyk jest pusty."
                                        )
                                    }
                                </h4>
                                {
                                    products.length > 0 ? (<></>) : (
                                        <a type="button" href={getOrigin()} 
                                            className="form-boarder form-control mb-3 btn btn-success text-white"> 
                                            Powrót do strony głównej
                                        </a>  
                                    )
                                }  
                                {
                                    products.length > 0 ? (
                                        <h4 className="form-boarder form-control mb-3">
                                            Sumaryczna wartość koszyka:
                                            <strong>
                                                {` ${calculateCartPrice().toFixed(2)} zł`}
                                            </strong>
                                        </h4>
                                    ) : (<></>)
                                }                         
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                products.length > 0 ? (
                    <div className="container mt-2 mb-2">
                        <div className="d-flex justify-content-center row">
                            <div className="col-md-10">
                                {
                                    products.map(product => (

                                        <div className="row mt-1 mb-2 p-2 bg-light border rounded" key={product.id}>
                                            <a className="col-md-3 mt-1" href={`/product/${product.id}`}>
                                                <Image imageLink={product.imageId ? `/api/v1/image?id=${product.imageId}` : loading} 
                                                    altText={`Zdjecie produktu ${product.name}`} />
                                            </a>
                                            <div className="align-items-center align-content-center col-md-6 mt-2 ">
                                                <a className="product-link" href={`/product/${product.id}`}>
                                                    <h5>{product.name}</h5>
                                                </a>
                                                <div className="pt-3">
                                                    <p className="text-muted">Ilość dni oczekiwania na dostawę: {product.deliveryWaitingTime}</p>
                                                    <p className="text-truncate">{product.description}</p>
                                                </div>
                                            </div>
                                            <div className="align-items-center align-content-center col-md-3 border-left mt-1 text-center">
                                                <h4 className="m-2">
                                                    {getCartElementById(product.id) ? getCartElementById(product.id).amount : 0} x {product.price.toFixed(2)} zł
                                                </h4>
                                                <div className="d-flex flex-column mt-4">
                                                    <button className="btn btn-success btn-sm" type="button" onClick={() => addToCart(product.id)}>
                                                        Dodaj kolejny
                                                    </button>
                                                    <button className="btn btn-outline-success btn-sm mt-2" type="button" onClick={() => deleteFromCart(product.id)}>
                                                        Usuń jeden
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }                                            
                            </div>
                        </div>
                    </div>
                ) : (<></>)
            } 

            {
                products.length > 0 ? (
                    <div className="container mb-4">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-md-10 d-flex justify-content-center">
                                <div className="card mt-4 shadow-3 bg-light">
                                    <div className="row g-0">
                                        <div className="col-xl-6 bg-image">
                                            <img src="https://mdbcdn.b-cdn.net/img/Others/extended-example/delivery.webp" alt="Zdjęcie dostawcy doręczającego paczkę"
                                                className="img-fluid" />
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="card-body p-md-5 text-black">
                                                <h3 className="mb-4">Dane do dostawy:</h3>
        
                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-floating">
                                                            <input type="text" id="nameInputId" className="form-control form-boarder" placeholder="Imie" 
                                                                onChange={e => setNameInput(e.target.value)}/>
                                                            <label className="form-label" htmlFor="nameInputId">Imie</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-floating">
                                                            <input type="text" id="surnameInputId" className="form-control form-boarder" placeholder="Nazwisko"
                                                                onChange={e => setSurnameInput(e.target.value)}/>
                                                            <label className="form-label" htmlFor="surnameInputId">Nazwisko</label>
                                                        </div>
                                                    </div>
        
                                                </div>
        
        
                                                <div className="form-floating mb-4">
                                                    <input type="text" id="addressInputId" className="form-control form-boarder" placeholder="Adres"
                                                        onChange={e => setAddressInput(e.target.value)}/>
                                                    <label className="form-label" htmlFor="addressInputId">Adres</label>
                                                </div>
        
        
                                                <div className="form-floating mb-4">
                                                    <input type="text" id="cityInputId" className="form-control form-boarder" placeholder="Miasto"
                                                        onChange={e => setCityInput(e.target.value)}/>
                                                    <label className="form-label" htmlFor="cityInputId">Miasto</label>
                                                </div>
        
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-floating mb-4">
                                                            <input type="text" id="zipCodeInput" className="form-control form-boarder" placeholder="00-000"
                                                                onChange={e => setZipInput(e.target.value)}/>
                                                            <label className="form-label" htmlFor="zipCodeInput">Kod pocztowy</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-floating">
                                                            <input type="text" id="phoneInputId" className="form-control form-boarder" placeholder="000000000"
                                                                onChange={e => setPhoneInput(e.target.value)}/>
                                                            <label className="form-label" htmlFor="phoneInputId">Numer telefonu</label>
                                                        </div>
                                                    </div>
                                                </div>
        
                                                <div className="form-outline mb-4 btn-group" role="group">
                                                    <input type="radio" className="btn-check" name="btnradio" id="cashRadioButton" autoComplete="off" defaultChecked 
                                                        onChange={e => setPaymentInput("PAYMENT_BY_CASH")}/>
                                                    <label className="btn btn-outline-success" htmlFor="cashRadioButton">Płatność gotówką przy odbiorze</label>
        
                                                    <input type="radio" className="btn-check" name="btnradio" id="cardRadioButton" autoComplete="off"
                                                        onChange={e => setPaymentInput("PAYMENT_BY_CARD")}/>
                                                    <label className="btn btn-outline-success" htmlFor="cardRadioButton">Płatność kartą przy odbiorze</label>
                                                </div>
        
                                                <div className="form-floating">
                                                    <input type="text" id="emailInputId" className="form-control form-boarder" placeholder="przyklad@przyklad.com"
                                                        onChange={e => setEmailInput(e.target.value)}/>
                                                    <label className="form-label" htmlFor="emailInputId">Email</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
        
        
                                    <div className="d-flex justify-content-center mb-4">
                                        <button type="button" className="btn btn-success btn-lg" onClick={placeOrder}>
                                            Złóż zamówienie
                                        </button>
                                    </div>
        
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (<></>)
            } 
            <PlacedOrderModal modalId="orderPlacedModal" orderId={orderId} />
        </div>
    )
}

export default ShoppingCart;
