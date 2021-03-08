import Input from "./components/Input";
import { useState } from "react";
import MapContainer from './components/MapContainer'

const App = () => {
    const [Location, setLocation] = useState([{latitude: 88.9, longitude: 87.6}]);
    const [Ip, setIp] = useState("IP");

    const APIKEY = "cad82a0c291128837a63b751f2f03664";
    const baseURL = "http://api.ipstack.com/";
    const trackIP = async (IP) => {
        const url = baseURL + IP + "?access_key=" + APIKEY;
        const res = await fetch(url);
        const data = await res.json();
        setIp(IP);
        setLocation([data]);
        console.log(Location);
        // console.log(Location[0].longitude);
        // console.log(Location[0].latitude);
    };

    return (
        <div className="App">
            <h1>Hello Everyone</h1>
            <Input trackIP={trackIP} />
            <h1>Location for {Ip} is:</h1>
            <h1>
                {Location[0].city}, {Location[0].country_name},{" "}
                {Location[0].continent_name}
            </h1>
            <MapContainer latitude = {Location[0].latitude} longitude = {Location[0].longitude}/>
        </div>
    );
};

export default App;
