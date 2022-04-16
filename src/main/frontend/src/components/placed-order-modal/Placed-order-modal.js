import './Placed-order-modal.css'
import { getOrigin } from '../../common/Common-functions'

const PlacedOrderModal = (props) => {
    
    return (
        <div className="modal fade" id={props.modalId} tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{`Zamówienie o numerze ${props.orderId} zostało złożone!`}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-footer">
                        <a type="button" className="btn btn-success" href={`${getOrigin()}`}>Przejdź do strony głównej</a>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Zamknij</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default PlacedOrderModal;