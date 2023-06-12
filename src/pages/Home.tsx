import { useEffect, useState } from "react";

import getAllCountryData from "../lib/getAllCountryData";
import { CountryDataType } from "../../types";
import Loader from "../components/Loader";

const Home = () => {
    const [countryData, setCountryData] = useState<
        Array<CountryDataType> | undefined
    >([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllCountryData();
            setCountryData(data);
            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="w-full h-full grid place-items-center">
                <Loader />
            </div>
        );
    }

    return (
        <div className="w-full">
            <table className="table-fixed mx-2 border border-black rounded-lg border-opacity-50 ">
                <thead className="sticky top-0">
                    <tr>
                        <th className="text-center px-6 py-2 bg-dark text-white rounded-ss-lg">
                            Name
                        </th>
                        <th className="text-center px-6 py-2 bg-dark text-white">
                            Flag
                        </th>
                        <th className="text-center px-6 py-2 bg-dark text-white">
                            Map Links
                        </th>
                        <th className="text-center px-6 py-2 bg-dark text-white">
                            Capital
                        </th>
                        <th className="text-center px-6 py-2 bg-dark text-white">
                            Region
                        </th>
                        <th className="text-center px-6 py-2 bg-dark text-white">
                            Population
                        </th>
                        <th className="text-center px-6 py-2 bg-dark text-white">
                            Currency
                        </th>
                        <th className="text-center px-6 py-2 bg-dark text-white">
                            Time Zone
                        </th>
                        <th className="text-center px-6 py-2 bg-dark text-white">
                            Languages
                        </th>
                        <th className="text-center px-6 py-2 bg-dark text-white">
                            Geo Coords
                            <br />
                            (Lat / Long)
                        </th>
                        <th className="text-center px-6 py-2 bg-dark text-white border border-white rounded-tr-lg">
                            Area (km<sup>2</sup>)
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {countryData?.map((country) => {
                        const currencyKey = country.currencies
                            ? Object.keys(country.currencies)[0]
                            : null;
                        const languageKey = country.languages
                            ? Object.keys(country.languages)[0]
                            : null;

                        return (
                            <tr key={country.name.official}>
                                <td className="text-center text-darkest border border-black border-opacity-50">
                                    {country.name.official}
                                </td>
                                <td className="border border-black border-opacity-50 w-32">
                                    <img
                                        className="w-full h-full"
                                        src={country.flags.svg}
                                        alt={country.flags.alt}
                                    />
                                </td>
                                <td className="text-center text-darkest border border-black border-opacity-50">
                                    <a
                                        href={country.maps.googleMaps}
                                        target="_blank"
                                    >
                                        {country.maps.googleMaps || "-"}
                                    </a>
                                </td>
                                <td className="text-center text-darkest border border-black border-opacity-50">
                                    {country.capital || "-"}
                                </td>
                                <td className="text-center text-darkest border border-black border-opacity-50">
                                    {country.region}
                                </td>
                                <td className="text-end px-3 text-darkest border border-black border-opacity-50">
                                    {country.population.toLocaleString() || "-"}
                                </td>
                                <td className="text-center text-darkest border border-black border-opacity-50">
                                    {currencyKey
                                        ? country.currencies[currencyKey]?.name
                                        : "-"}{" "}
                                    <br />
                                    {currencyKey
                                        ? country.currencies[currencyKey]
                                              ?.symbol
                                        : ""}
                                </td>
                                <td className="text-center text-darkest border border-black border-opacity-50 w-44">
                                    {country.timezones[0]}
                                </td>
                                <td className="text-center text-darkest border border-black border-opacity-50">
                                    {languageKey
                                        ? country.languages[languageKey]
                                        : "-"}
                                </td>
                                <td className="text-center text-darkest border border-black border-opacity-50 w-44">
                                    {`(${country.latlng[0].toFixed(
                                        0
                                    )}, ${country.latlng[1].toFixed(0)})`}
                                </td>
                                <td className="text-end px-3 text-darkest border border-black border-opacity-50">
                                    {country.area.toLocaleString()}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
export default Home;
