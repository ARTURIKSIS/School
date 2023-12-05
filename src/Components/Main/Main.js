import "./Main.css"
import Element from "../Element/Element";
import bpla from "../../Images/bpla.jpeg";
import bpla2 from "../../Images/drone.jpeg";
import bpla3 from "../../Images/kartinki-bespilotniki.jpg";
import bpla4 from "../../Images/funny bpla.jpeg";

function Main(){
    return (
        <div className="main">
            <Element photo={bpla}/>
            <Element photo={bpla2}/>
            <Element photo={bpla3}/>
            <Element photo={bpla4}/>
        </div>
    )
}
export default Main;