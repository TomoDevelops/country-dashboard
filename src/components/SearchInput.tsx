import { useState } from "react";

const SearchInput = ({ inputName }: { inputName: string }) => {
    const [searchInput, setSearchInput] = useState<string>("");

    return (
        <div className="flex gap-x-2 items-center">
            <label className="text-black text-opacity-75" htmlFor={inputName}>
                {inputName}
            </label>
            <input
                className="py-2 px-4 rounded-md bg-white border border-black border-opacity-25 outline-none"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                type="text"
                name={inputName}
                placeholder={`Search by ${inputName}`}
            />
        </div>
    );
};
export default SearchInput;
