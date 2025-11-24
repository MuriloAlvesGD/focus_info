import { useParams, useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
import "./Blocked.css";

function Blocked() {
    const { url } = useParams();
    const navigate = useNavigate();

    return (
        <div className="page-blocked">
            <div className="container">
                <ImCross id="close-btn" onClick={() => navigate("/")} />
                <img className="logo-full logo-blocked" src="/focus_info/black_full.png" alt="Logo do Focus Haven" />
                <span>URL BLOQUEADA:</span>
                <div className="blocked-text">
                    <h2>{url}</h2>
                    <h3>
                        Estamos muito felizes por você estar buscando melhorar seus hábitos com a nossa ajuda!
                    </h3>
                    <p>
                        Continue aproveitando o projeto <strong>Focus Haven</strong> e compartilhe com seus amigos para que
                        todos possam aprimorar seu foco, independentemente da atividade.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Blocked;
