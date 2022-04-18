import './Image.css'
import { 
    getOrigin, 
} from '../../common/Common-functions'

const Image = (props) => {
    return (
        <div>
            <img src={`${getOrigin()}/${props.imageLink}`} alt={props.altText} className="img-fluid rounded-img"></img>
        </div>
    )
}

export default Image
