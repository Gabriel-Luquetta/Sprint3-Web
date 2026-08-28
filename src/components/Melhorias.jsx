import { useState } from "react";
import ImprovementOptions from "./OpçoesdeSimulacao";

function CameraEditor({ adicionarHistorico }) {
const [imagem, setImagem] = useState(null);
const [melhoria, setMelhoria] = useState("nitidez");
const [resultado, setResultado] = useState(null);
const [processando, setProcessando] = useState(false);
function selecionarImagem(event)
 
{const arquivo = event.target.files[0];
if (!arquivo) return;
const url = URL.createObjectURL(arquivo);
setImagem(url);
setResultado(null);
}
function melhorarImagem() {
if (!imagem) {
alert("Selecione uma imagem primeiro.");
return;
}
setProcessando(true);
setTimeout(() => {
const qualidadeAntes =
Math.floor(Math.random() * 25) + 60;
const melhoriaIA =
Math.floor(Math.random() * 20) + 15;
const qualidadeDepois =
Math.min(
qualidadeAntes + melhoriaIA,
100
);
const novoResultado = {
qualidadeAntes,
qualidadeDepois,
melhoriaIA,
tipo: melhoria
};
setResultado(novoResultado);
adicionarHistorico(novoResultado);
setProcessando(false);
}, 1500);
}
return (
<section className="editor" id="editor">
<div className="section-title">
<p className="tag">AI PHOTO ENHANCER</p>
<h2>Melhore sua foto</h2>
<p>Envie uma imagem e escolha o aprimoramento</p>
</div>
<div className="editor-grid">

<div className="upload-area">
{imagem ? (
<img src={imagem}alt="Imagem selecionada"className="preview"/>) : (
<div className="upload-message">
<h3>Envie sua foto</h3>
<p>JPG, PNG ou WEBP</p>
</div>
)}
<label className="upload-button">
Escolher imagem
<input
type="file"
accept="image/*"
onChange={selecionarImagem}
hidden
/>
</label>
</div>
<div className="controls">
<ImprovementOptions
melhoria={melhoria}
setMelhoria={setMelhoria}
/>
<button className="process-button"
onClick={melhorarImagem}
disabled={processando}
>
{processando
? "Processando IA..."
: "Melhorar com IA"}
</button>
{resultado && (
<div className="result-mini">
<p>Qualidade anterior</p>
<strong>
{resultado.qualidadeAntes}%
</strong>
<p>Qualidade depois da IA</p>
<strong>
{resultado.qualidadeDepois}%
</strong>

</div>
)}
<button
className="process-button"
onClick={() => {
const link = document.createElement("a");
link.href = imagem;
link.download = "imagem-melhorada.png";
link.click();
}}
>
💾 Salvar imagem
</button>
 </div>
</div>
</section>
);
}

export default CameraEditor;