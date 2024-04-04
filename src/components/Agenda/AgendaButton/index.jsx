const Button = ({ onClick, children }) => (
    <button
      onClick={onClick}
      className="bg-[#15153F] h-20 w-44 rounded-lg font-text text-2xl font-bold max-lg:h-20 max-lg:w-32 
      hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-500 hover:-translate-y-2 hover:duration-700 
      focus:bg-blue-500 focus:shadow-2xl focus:shadow-blue-500 focus:-translate-y-2 focus:duration-700"
    >
      {children}
    </button>
  );


  export default Button