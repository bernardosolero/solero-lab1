function CalculatorButton({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl p-4 text-xl font-semibold transition duration-150 hover:brightness-110 active:scale-95 ${className}`}
    >
      {children}
    </button>
  )
}

export default CalculatorButton