import "./Element.css";

function Element({photo,label}){
    return (
      <div className="Element">
        <img className="Element__photo" src={photo} alt="No" />
        <div className="Element__label">
            {label}
        </div>
      </div>
    );
}
export default Element;