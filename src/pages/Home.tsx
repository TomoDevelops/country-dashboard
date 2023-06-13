import { useEffect, useState } from "react";

import getAllCountryData from "../lib/getAllCountryData";
import { CountryDataType } from "../../types";
import Loader from "../components/Loader";
import TableHead from "../components/TableHead";
import SearchContainer from "../components/SearchContainer";

const Home = () => {
    const [countryData, setCountryData] = useState<CountryDataType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllCountryData();
            setCountryData(data);
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div className="w-full h-full">
            {loading ? (
                <div className="w-full h-full grid place-items-center">
                    <Loader />
                </div>
            ) : (
                <div className="relative">
                    <SearchContainer />
                    <table className="table-fixed mx-2 border-r border-l border-b border-black rounded-lg border-opacity-50 ">
                        <thead className="sticky top-32">
                            <tr>
                                <TableHead
                                    headerTitle="Name"
                                    styles="rounded-ss-lg"
                                />
                                <TableHead headerTitle="Flag" />
                                <TableHead headerTitle="Map Links" />
                                <TableHead headerTitle="Capital" />
                                <TableHead headerTitle="Region" />
                                <TableHead headerTitle="Population" />
                                <TableHead headerTitle="Currency" />
                                <TableHead headerTitle="Time Zone" />
                                <TableHead headerTitle="Languages" />
                                <TableHead headerTitle="Geo Coords" />
                                <TableHead
                                    headerTitle="Area (km)"
                                    styles="border border-white rounded-tr-lg"
                                />
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
                                            {country.population.toLocaleString() ||
                                                "-"}
                                        </td>
                                        <td className="text-center text-darkest border border-black border-opacity-50">
                                            {currencyKey
                                                ? country.currencies[
                                                      currencyKey
                                                  ]?.name
                                                : "-"}{" "}
                                            <br />
                                            {currencyKey
                                                ? country.currencies[
                                                      currencyKey
                                                  ]?.symbol
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
                                            )}, ${country.latlng[1].toFixed(
                                                0
                                            )})`}
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
            )}
        </div>
    );
};
export default Home;
