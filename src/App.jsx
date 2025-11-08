import "./App.css";
import { useState, useRef } from "react";

function App() {
    const [subject, setSubject] = useState("");
    const formRef = useRef(null);

    const handleSubject = (e) => {
        e = e.target.value.trim();
        setSubject(`FEEDBACK FOCUS HAVEN - ${e}`);
    };

    const handleExternalSubmit = () => {
        const form = document.getElementById("form-submit");
        form.submit();
    };

    return (
        <div className="App">
            <img className="logo-full" src="/focus_info/black_full.png" alt="Focus Haven LOGO"/>
            <div className="Topic-divisor">
                <div className="line" />
                <span>SOBRE O PROJETO</span>
                <div className="line" />
            </div>
            <div className="readme-section">
                <p>
                    O projeto <strong>Focus Haven</strong> é uma ferramenta que busca ser um refúgio para todos aqueles
                    que buscam melhorar seu foco, independente da atividade. O projeto inclui o <strong>Memo</strong>,
                    inspirado na ideia do famoso{" "}
                    <a href="https://pt.wikipedia.org/wiki/Tamagotchi" target="_blank" rel="noopener noreferrer">
                        TAMAGOCHI
                    </a>
                    . Em resumo, trata-se de um "pet virtual", mas com funcionalidades que vão além dessa definição.
                </p>

                <h3>Índice</h3>
                <ul>
                    <li>
                        <a href="#historia">História</a>
                    </li>
                    <li>
                        <a href="#caracteristicas">Características</a>
                    </li>
                    <li>
                        <a href="#instalacao">Instalação</a>
                    </li>
                    <li>
                        <a href="#atencao">Atenção</a>
                    </li>
                </ul>

                <h3 id="historia">História</h3>
                <p>
                    O <strong>Focus Haven</strong> deriva de uma ideia que foi escrita há bastante tempo, chamada "MEU
                    PALÁCIO MENTAL", que também seria uma ferramenta de estudos e teria o <strong>Memo</strong> como
                    personagem principal, representando o subconsciente ou a própria MEMOria. A ideia original era mais
                    complexa e, possivelmente, ineficiente. Assim, buscou-se simplificá-la e melhorar sua usabilidade e
                    aplicabilidade, resultando no projeto <strong>Focus Haven</strong>.
                </p>

                <h3 id="caracteristicas">Características</h3>
                <ul>
                    <li>
                        <strong>Método Pomodoro</strong>: A técnica foi implementada com parâmetros configuráveis,
                        cronômetro pausável e penalidades por interrupções.
                    </li>
                    <li>
                        <strong>PET Virtual - Memo</strong>: Utilizado para humanizar a solução e gerenciar recompensas
                        e punições.
                    </li>
                    <li>
                        <strong>Bloqueio de Distrações</strong>: O usuário pode informar quais sites são fontes de
                        distração e será redirecionado ao acessar esses sites.
                    </li>
                </ul>
                <h3 id="instalacao">Instalação</h3>
                <ol>
                    <li>Clique no <strong>+</strong> no canto superior direito e clique no simbolo de download</li>
                    <li>abra a pasta de download do seu pc e extraia o seguinte arquivo:</li>
                    <pre>
                        <code>focus_haven.zip</code>
                    </pre>
                    <li>Abra o navegador e na barra de pesquisa acesse:</li>
                    <pre><code>chrome://extensions/</code></pre>
                    <li>Ative o <strong>modo de desenvolvedor</strong> no canto superior direito.</li>
                    <li>Clique em <strong>Carregar sem compactação</strong> e, na janela que abrir, navegue até a pasta em que você extraiu o projeto e selecione a pasta <strong>focus_haven</strong>.</li>
                    <li><strong>Pronto!</strong> A extensão será instalada e aparecerá em seu menu de extensões.</li>
                </ol>

                <h3 id="atencao">Atenção</h3>
                <p>
                    Este é um projeto ainda em desenvolvimento e contém diversos bugs e falhas. Achou algum erro?{" "}
                    <strong>Preencha o formulário abaixo</strong>. Sua contribuição será de grande ajuda para o
                    desenvolvimento dessa solução!
                </p>
            </div>
            <div className="Topic-divisor">
                <div className="line" />
                <span>CONTATO</span>
                <div className="line" />
            </div>
            <div className="contact-box">
                <form
                    id="form-submit"
                    action="https://formsubmit.co/568a02d6bcaa9401e6e5456dae10e152"
                    method="post"
                    target="_self"
                    encType="multipart/form-data">
                    <input type="hidden" name="_template" value="box" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="text" name="_honey" id="honeyPot" />
                    <input type="hidden" name="_next" value="https://MuriloAlvesGD.github.io/focus_info/" />
                    <input type="hidden" name="_subject" value={subject} />
                    <input
                        type="hidden"
                        name="_blacklist"
                        value="padrão de spam, termo banido, oferta especial, clique aqui, ganhe dinheiro rápido, promoção exclusiva, grátis, sem custo, produto milagroso, última chance, não perca, urgente, confidencial, apenas hoje, inscrição gratuita, satisfação garantida, risco zero, aumente seu tráfego, melhore sua vida, venda rápida"
                    />
                    <h2>GOSTARIA DE CONTRIBUIR COM NOSSO PROJETO?</h2>
                    <input
                        required
                        id="titulo"
                        type="text"
                        name="titulo"
                        placeholder=""
                        onChange={(e) => handleSubject(e)}
                    />
                    <label htmlFor="titulo">titulo</label>
                    <h3>DESCRIÇÃO</h3>
                    <textarea required id="description" name="Descrição"></textarea>
                    <p id="formSubmit" onClick={() => handleExternalSubmit()}>
                        ENVIAR
                    </p>
                </form>
            </div>
            <div class="readme-section">
                <h3 id="atencao">Cafézinho</h3>
                <p>
                    Como todo bom desenvolvedor. O desse projeto é movido por café, então fique a vontade para mandar o
                    pix do cafézino para ele nessa chave: <span id="pix">muriloalves.dev@gmail.com</span>. Eternamento grato a você!
                </p>
            </div>
        </div>
    );
}

export default App;
