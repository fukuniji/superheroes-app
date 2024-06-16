import "./App.css";
import data from "../data.json";
import Card from "../components/Card/Card";

function App() {
    return (
        <>
        <header>
            <h1>Superheroes</h1>
        </header>
        <main>
            <div className="container">
                {data.map((item, index)=>(
                    <Card data={item} key={index}/>
                ))}
            </div>
        </main>
        
        </>
    );
}

export default App;
