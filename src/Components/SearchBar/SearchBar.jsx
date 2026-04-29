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
        <div className="p-4 w-full flex flex-col items-center justify-center">
            <input
                className="w-full max-w-lg px-6 py-3 text-lg text-purple-900 bg-white border-4 border-purple-300 rounded-full shadow-lg outline-none transition-all duration-300 placeholder-purple-400 focus:border-pink-400 focus:ring-4 focus:ring-pink-200 hover:shadow-xl hover:-translate-y-1"
                placeholder="Buscá tu artículo..."
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
            />

            {noResults && (
                <p className="mt-4 px-4 py-1.5 bg-white border-2 border-red-400 text-red-500 rounded-full text-sm font-bold shadow-sm animate-pulse">
                    No se encontraron resultados para "{searchQuery}"
                </p>
            )}
        </div>
    );
};

export default SearchBar;