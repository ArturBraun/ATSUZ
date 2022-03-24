
const Image = (props) => {
    return (
        <div>
            <img src={props.imageLink} alt={props.altText}></img>
        </div>
    )
}

export default Image
