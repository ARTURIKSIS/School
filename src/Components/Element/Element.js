import "./Element.css"

function Element(){
    return (
        <div className="Element">
                <img className="Element__photo" src="bpla.jpeg" alt="No"/>
                <p className="Element__photo-text">
                    название фото
                </p>
            <div className="Element__label">       
            </div>
        </div>
    )
}
export default Element;