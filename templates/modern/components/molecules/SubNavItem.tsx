export const SubNavItem = ({ label, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-2 pl-12 rounded-lg transition-all ${
        active
          ? "bg-purple-50 text-purple-700 font-medium"
          : "text-gray-600 hover:bg-gray-50"
      }`}
    >
      {label}
    </button>
  );
};
