import React from "react";
import ErrorComponent from "../Error/ErrorComponent";

const SearchBar = ({
    searchQuery,
    setSearchQuery,
    setScrollReset,
    noResults,
}) => {
    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
        if (setScrollReset) {
            setScrollReset(0);
        }
    };

    return (
        <div className="p-4 w-full flex flex-col items-center justify-center">
            <input
                className="w-full max-w-lg px-6 py-3 text-lg text-purple-900 bg-white border-4 border-purple-300 rounded-full shadow-lg outline-none transition-all duration-300 placeholder-purple-400 hover:shadow-xl"
                placeholder="Buscá tu artículo..."
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
            />

            {noResults && (
                <ErrorComponent/>
            )}
        </div>
    );
};

export default SearchBar;