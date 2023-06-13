import { useState } from "react";
import SearchInput from "./SearchInput";

const SearchContainer = () => {
    const [searchInput, setSearchInput] = useState<string>("");

    return (
        <div className="w-full h-32 py-4 flex flex-col justify-between sticky top-0 bg-white">
            <div className="flex items-center gap-4 ">
                <SearchInput inputName="Country" />
                <SearchInput inputName="Region" />
                <SearchInput inputName="Region" />
                <SearchInput inputName="Language" />
                <SearchInput inputName="Timezone" />
            </div>
            <button
                className="text-white bg-dark self-start py-2 px-6 rounded-md"
                type="submit"
            >
                Search
            </button>
        </div>
    );
};
export default SearchContainer;
