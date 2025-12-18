import "./floatingMenu.css";
import { ImCross } from "react-icons/im";
import Icons from "../icons/icons.jsx";

function FloatingMenu() {
    return (
        <div id="controller">
            <div id="top-bar">
                <input type="checkbox" id="menuBtn"></input>
                <label id="labelMenu" htmlFor="menuBtn">
                    <ImCross />
                </label>
                <nav id="navBtn">
                    <a href={"/focus_info/focus_haven.zip"} target="_blank" rel="noopener noreferrer">
                        <Icons icon="download" width="25px" className="btn" />
                    </a>
                    <a href={"https://github.com/MuriloAlvesGD/focus_haven"} target="_blank" rel="noopener noreferrer">
                        <Icons icon="github" width="25px" className="btn" />
                    </a>
                </nav>
            </div>
        </div>
    );
}

export default FloatingMenu;
