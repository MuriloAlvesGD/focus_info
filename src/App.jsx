import FloatingMenu from "./components/FloatingMenu/FloatingMenu";
import Page from "./views/Page/Page";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        // Obtendo a URL atual
        const urlAtual = window.location.href;

        // Criando um objeto URL
        const url = new URL(urlAtual);

        // Obtendo os parâmetros da URL
        const params = new URLSearchParams(url.search);

        console.log(url)
        console.log(params)

        if (params.size == 1) {
            navigate(`/blocked/${params.get("q")}`);
        }
    }, []);

    return (
        <>
            <FloatingMenu />
            <Page />
        </>
    );
}

export default App;
