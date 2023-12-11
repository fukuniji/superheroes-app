import "./App.css";
import data from "./data.json";
import List from "./components/List";

function App() {
    return (
        <>
        <header>
            <h1>Superheroes</h1>
        </header>
        <List data={data}/>
        </>
    );
}

export default App;
