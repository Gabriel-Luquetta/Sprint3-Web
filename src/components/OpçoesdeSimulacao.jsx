function ImprovementOptions({ melhoria, setMelhoria }) {

    const opcoes = [
        {
            id: "nitidez",
            nome: "Nitidez",
            descricao: "Aumente os detalhes."
        },
        {
            id: "iluminacao",
            nome: "Iluminação",
            descricao: "Corrige a iluminação de fotos."
        },
        {
            id: "cores",
            nome: "Cores",
            descricao: "Melhora a intensidade das cores."
        },
        {
            id: "ruido",
            nome: "Redução de ruído",
            descricao: "Reduz granulação da imagem."
        },
        {
            id: "resolucao",
            nome: "Resolução",
            descricao: "Aumenta a qualidade da imagem."
        }
    ];

    return (
        <div className="options">
<h3>Escolha a melhoria</h3>
{opcoes.map((opcao) => (
<button key={opcao.id}
className={ melhoria === opcao.id
? "option active" : "option"}onClick={() => setMelhoria(opcao.id)}>
<strong>{opcao.nome}</strong>
<small>{opcao.descricao}</small>
</button>
))}
</div>
);
}

export default ImprovementOptions;