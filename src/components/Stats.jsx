function Stats({ historico }) {

const total = historico.length;

const media = total > 0 
? historico.reduce(
(soma, item) => soma + item.melhoriaIA,0) / total: 0;

const maiorMelhoria = total > 0
? Math.max(
...historico.map(
item => item.melhoriaIA
)
)
: 0;
    return (
        <section className="stats">
<div className="stat">
<strong>{total}</strong>
<span>Fotos melhoradas</span>
</div>
<div className="stat">
<strong>
{media.toFixed(1)}%
</strong>
<span>Melhoria média</span>
</div>
<div className="stat">
<strong>
+{maiorMelhoria}%
</strong>
<span>Maior melhoria</span>
</div>
</section>
);
}

export default Stats;