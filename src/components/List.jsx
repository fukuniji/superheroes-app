import ListItem from "./ListItem";

export default function List({ data }) {
    return (
        <>
        <div className="container">
            {data.map((item, index)=>(
                <ListItem data={item} key={index}/>
            ))}
        </div>
        </>
    );
}

// Если вы опустить ключ для элемента в списке, 
// то React по умолчанию будет использовать индексы как ключи