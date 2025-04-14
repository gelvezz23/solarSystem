"use client";
import usePlanetStore from "@/infrastructure/zustand/store/planetStore";

const RenderPages = () => {
  const { allPlanets, currentPage, planetsPerPage, setCurrentPage } =
    usePlanetStore();
  const totalPages = Math.ceil(allPlanets.length / planetsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => handlePageChange(i)}
        className={`mx-1 px-2 py-1 rounded ${
          currentPage === i
            ? "bg-indigo text-white"
            : "bg-white text-gray-700 hover:bg-gray-300"
        }`}
      >
        {i}
      </button>
    );
  }

  return <div className="flex justify-center mt-4">{pages}</div>;
};

export default RenderPages;
