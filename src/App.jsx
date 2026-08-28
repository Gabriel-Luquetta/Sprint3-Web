import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CameraEditor from "./components/Melhorias";
import History from "./components/Historico";
import Stats from "./components/Stats";
import ImprovementOptions from "./components/OpçoesdeSimulacao";
import Footer from "./components/Footer";

function App() {

    const [historico, setHistorico] = useState(() => {

        const dados =
            localStorage.getItem("aiLensHistorico");

        return dados
            ? JSON.parse(dados)
            : [];
    });

    useEffect(() => {

        localStorage.setItem(
            "aiLensHistorico",
            JSON.stringify(historico)
        );

    }, [historico]);

    function adicionarHistorico(resultado) {

        setHistorico([
            resultado,
            ...historico
        ]);
    }

    function removerHistorico(index) {

        setHistorico(
            historico.filter(
                (_, i) => i !== index
            )
        );
    }

    return (
        <>
            <Header />

            <main>

                <Hero />

                <CameraEditor
                    adicionarHistorico={adicionarHistorico}
                />

                <Stats
                    historico={historico}
                />

                <History
                    historico={historico}
                    removerHistorico={removerHistorico}
                />

            </main>

            <Footer />
        </>
    );
}

export default App;