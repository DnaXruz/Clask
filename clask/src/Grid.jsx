export function Grid({items}){
    return(
    <div class="grid">
    {items.map(e => <div class="card"><h2>{e.title}</h2><p>{e.ref}</p></div>)}
    </div>)
}