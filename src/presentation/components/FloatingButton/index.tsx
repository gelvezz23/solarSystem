"use client";
const FloatingButton = () => {
  const scrollToContent = () => {
    const targetElement = document.getElementById("content-below");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToContent}
      className="relative z-50 bottom-22 left-1/2 transform -translate-x-1/2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-full shadow-lg p-4 transition-transform duration-300 ease-in-out cursor-pointer"
    >
      ver mas
    </button>
  );
};

export default FloatingButton;
