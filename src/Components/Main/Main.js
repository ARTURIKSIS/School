import "./Main.css"
import Element from "../Element/Element";
import bpla from "../../Images/bpla.jpeg";
import bpla2 from "../../Images/drone.jpeg";
import bpla3 from "../../Images/kartinki-bespilotniki.jpg";
import bpla4 from "../../Images/funny bpla.jpeg";
const label1 = "Обучим упралению всеми типами бпла";
const label2 = "Научим тактике применения";
const label3 = `Покажем потенциал удалённой "работы"`;
const label4 = "Для участия в СВО обучение бесплатно";

function Main(){
    return (
        <div className="main">
            <Element photo={bpla} label={label1}/>
            <Element photo={bpla2} label={label2}/>
            <Element photo={bpla3} label={label3}/>
            <Element photo={bpla4} label={label4}/>
        </div>
    )
}
export default Main;