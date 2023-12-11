export default function ListItem({ data }) {
    return (
    <>
    <div className="list-item">
        <img className="hero-img" src={data.url} alt={data.name}/>
        <h2>{data.name}</h2>
        <p>Альтер-эго: {data.alterego}</p>
        <p>Род занятий: {data.occupation}</p>
        <p>Особые силы: {data.superpowers}</p>
        <p>Союзники: {data.friends}</p>
        <p>{data.info}</p>
        <p>Издатель: {data.universe}</p>
    </div>
    </>
    );
}