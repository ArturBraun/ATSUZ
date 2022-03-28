import './Image.css'

const Image = (props) => {
    return (
        <div>
            <img src={props.imageLink} alt={props.altText} className="img-fluid rounded-img"></img>
        </div>
    )
}

export default Image
