import Input from "./components/Input";
import { useState } from "react";

const App = () => {
    const [Location, setLocation] = useState([]);

    const APIKEY = "cad82a0c291128837a63b751f2f03664";
    const baseURL = "http://api.ipstack.com/";
    const trackIP = async (IP) => {

        const url = baseURL + IP + "?access_key=" + APIKEY;
        const res = await fetch(url);
        const data = await res.json();

        console.log(data)
        setLocation([data]);
        console.log(Location[0].longitude);
        console.log(Location[0].latitude);
    };

    return (
        <div className="App">
            <h1>Hello Everyone</h1>
            <Input trackIP={trackIP} />
        </div>
    );
};

export default App;
