import { useEffect, useState } from "react";

import getAllCountryData from "../lib/getAllCountryData";
import { CountryDataType } from "../../types";

const Home = () => {
    const [countryData, setCountryData] = useState<
        Array<CountryDataType> | undefined
    >([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllCountryData();
            setCountryData(data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log(countryData);
    }, [countryData]);

    return <h1>Home Page</h1>;
};
export default Home;
