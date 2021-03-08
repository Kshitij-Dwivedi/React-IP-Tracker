import Input from "./components/Input";
import { useState } from "react";
import MapContainer from "./components/MapContainer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    const [Location, setLocation] = useState([
        { latitude: 88.9, longitude: 87.6 },
    ]);
    const [Ip, setIp] = useState("");

    const APIKEY = "cad82a0c291128837a63b751f2f03664";
    const baseURL = "http://api.ipstack.com/";
    const trackIP = async (IP) => {
        const url = baseURL + IP + "?access_key=" + APIKEY;
        const res = await fetch(url);
        const data = await res.json();
        setIp(IP);
        setLocation([data]);
        console.log(Location);
    };

    return (
        <div className="App">
            <h1 className = "head">IP Address Tracker</h1>
            <Input trackIP={trackIP} />
            {Ip ? <h2 >Location for {Ip} is:</h2> : <h1></h1>}
            {Ip ? (
                <h2 className = "loc">
                    {Location[0].city}, {Location[0].country_name},{" "}
                    {Location[0].continent_name}
                </h2>
            ) : (
                <h1></h1>
            )}
            {/* <MapContainer latitude = {Location[0].latitude} longitude = {Location[0].longitude}/> */}
        </div>
    );
};

export default App;
