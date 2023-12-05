import "./Element.css";

function Element({photo}){
    return (
        <div className="Element">
                <img className="Element__photo" src={photo} alt="No"/>
            <div className="Element__label">       
            </div>
        </div>
    )
}
export default Element;