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

    useEffect(() => {
        console.log(countryData);
    }, [countryData]);

    if (loading) {
        return (
            <div className="w-full h-full grid place-items-center">
                <Loader />
            </div>
        );
    }

    return (
        <div className="mx-6">
            <table className="table-fixed h-[calc(100vh-80px)] overflow-y-auto w-full border border-black border-opacity-50 rounded-lg">
                <thead className="sticky top-0">
                    <tr>
                        <th className="px-10 py-2 bg-dark text-white border border-white rounded-ss-lg">
                            Flag
                        </th>
                        <th className="px-10 py-2 bg-dark text-white border border-white">
                            Map Links
                        </th>
                        <th className="px-10 py-2 bg-dark text-white border border-white">
                            Name
                        </th>
                        <th className="px-10 py-2 bg-dark text-white border border-white">
                            Capital
                        </th>
                        <th className="px-10 py-2 bg-dark text-white border border-white">
                            Region
                        </th>
                        <th className="px-10 py-2 bg-dark text-white border border-white">
                            Population
                        </th>
                        <th className="px-10 py-2 bg-dark text-white border border-white">
                            Currency
                        </th>
                        <th className="px-10 py-2 bg-dark text-white border border-white">
                            Time Zone
                        </th>
                        <th className="px-10 py-2 bg-dark text-white border border-white">
                            Languages
                        </th>
                        <th className="px-10 py-2 bg-dark text-white border border-white">
                            Geographic Coordinates (Lat / Long)
                        </th>
                        <th className="px-10 py-2 bg-dark text-white border border-white rounded-tr-lg">
                            Area (km<sup>2</sup>)
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {countryData?.map((country) => (
                        <tr>
                            <td className="flex justify-center items-center ">
                                <img
                                    className="aspect-video"
                                    src={country.flags.svg}
                                    alt={country.flags.alt}
                                />
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default Home;
