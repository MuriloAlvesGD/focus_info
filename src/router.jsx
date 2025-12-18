import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import Blocked from "./views/Blocked/Blocked";

function Router(colors) {
    const NotFound = () => {
        return (
            <div
                style={{
                    background: "black",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <img
                    style={{ height: "100%" }}
                    src="https://httpcats.com/404.jpg"
                    alt="404 Not Found"
                />
            </div>
        );
    };

    return (
        <BrowserRouter basename="/focus_info">
            <Routes>
                <Route path="" element={<App />} />
                <Route path="/blocked/:url" element={<Blocked />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
