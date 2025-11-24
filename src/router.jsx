import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import Blocked from "./views/Blocked/Blocked"

function Router(colors) {
    return (
        <BrowserRouter basename="/focus_info">
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/blocked/:url" element={<Blocked/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
