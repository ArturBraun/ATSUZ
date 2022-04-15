import './Quick-message.css'
import { getOrigin } from '../../common/Common-functions'

const QuickMessage = (props) => {
  
    return (
        <div className="modal fade" id={props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Produkt został dodany do koszyka!</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-footer">
                        <a type="button" className="btn btn-success" href={`${getOrigin()}/cart`}>Przejdź do koszyka</a>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Zamknij</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default QuickMessage;