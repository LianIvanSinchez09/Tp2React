import React from "react";

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
        <div className="p-2 m-2 flex flex-col items-center justify-center">
            <input
                className="bg-white dark:bg-[#1f2028] text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-[#2e303a] px-4 py-2.5 rounded-lg font-sans text-[0.95rem] outline-none transition-all duration-200 cursor-text focus:border-purple-500 focus:ring-1 focus:ring-purple-500 w-full max-w-md shadow-sm"
                placeholder="Buscá tu artículo"
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
            />

            {noResults && (
                <p className="text-red-500 text-sm mt-0 font-medium">
                    No se encontraron resultados para <strong className="font-bold">"{searchQuery}"</strong>
                </p>
            )}
        </div>
    );
};

export default SearchBar;