function History({ historico, removerHistorico }) {

return (
<section className="history" id="historico">
<div className="section-title">
<p className="tag">HISTÓRICO</p>
<h2>Suas melhorias</h2>
</div>
{historico.length === 0 ? (
<p className="empty">Nenhuma imagem processada ainda.</p>
) : (
<div className="history-list">
{historico.map((item, index) => (
<div className="history-item"key={index}>
<div>
<strong>{item.tipo}</strong>
<p>{item.qualidadeAntes}%{" → "}{item.qualidadeDepois}%</p></div>
<button onClick={() => removerHistorico(index)}>
Excluir
</button>
</div>
))}
</div>
)}
</section>
);
}

export default History;