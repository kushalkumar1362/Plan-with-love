import { useState } from "react";
import "./App.css";
import Tours from "./Components/Tours";
import data from "./data";

function App() {
    const [tours, setTours] = useState(data);

    function removeTour(id) {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    }

    if (tours.length === 0) {
        return (
            <div className="refresh">
                <h2>No tours left</h2>
                <button className="btn-refresh" onClick={() => setTours(data)}>
                    Refresh
                </button>
            </div>
        );
    }
    return (
        <div>
            <Tours tours={tours} removeTour={removeTour}></Tours>
        </div>
    );
}

export default App;
