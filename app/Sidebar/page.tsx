const Sidebar = () => {
    const categories = [
      "General physician",
      "Gynecologist",
      "Dermatologist",
      "Pediatricians",
      "Neurologist",
      "Gastroenterologist",
    ];
  
    return (
      <aside className="w-full md:w-64 bg-white border border-gray-300 rounded-lg p-4 md:p-6 ">
        <ul className="space-y-3">
          {categories.map((category, index) => (
            <li key={index}>
              <button className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-blue-500 hover:text-white transition">
                {category}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    );
  };
  
  export default Sidebar;
  