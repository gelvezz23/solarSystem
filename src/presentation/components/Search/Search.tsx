import React from "react";
import usePlanetStore from "@/infrastructure/zustand/store/planetStore"; // Adjust the path
import SortAZ from "../Icons/sortAZ";
import SortZA from "../Icons/sortZA";
import SearchIcon from "../Icons/search";
import Results from "./Results";

const PlanetSearch = () => {
  const {
    searchTerm,
    setSearchTerm,
    searchResults,
    sortPlanetsAlphabetically,
    sortOrder,
  } = usePlanetStore();

  const handleInputChange = (event: { target: { value: string } }) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    usePlanetStore.getState().searchPlanets(searchTerm);
  };

  const handleSortAlphabetically = () => {
    sortPlanetsAlphabetically();
  };

  return (
    <form onSubmit={handleKeyPress}>
      <div className="container">
        <div className="flex rounded-md shadow-sm mb-4">
          <input
            type="text"
            className="block w-full min-w-0 flex-1 rounded-none rounded-l-md border border-gray-300 py-2 pl-3 pr-12 text-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Search planets..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="-ml-px relative inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <SearchIcon />
            <span>Search</span>
          </button>

          <button
            type="button"
            onClick={handleSortAlphabetically}
            className="-ml-px relative inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            {sortOrder === "asc" ? <SortAZ /> : <SortZA />}
          </button>
        </div>

        <Results searchResults={searchResults} />
      </div>
    </form>
  );
};

export default PlanetSearch;
