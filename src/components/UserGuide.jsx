function UserGuide() {
  return (
    <section className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold text-slate-900">
        Calculator User Guide
      </h2>

      <div className="space-y-5 text-slate-600">

        <div>
          <h3 className="font-semibold text-slate-900">
            How to Use
          </h3>

          <p>
            Enter the first number, choose an operator, enter the
            second number, and press the equals (=) button to display
            the result.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900">
            Supported Operations
          </h3>

          <ul className="mt-2 list-inside list-disc">
            <li>Addition (+)</li>
            <li>Subtraction (−)</li>
            <li>Multiplication (×)</li>
            <li>Division (÷)</li>
          </ul>
        </div>

        <div className="rounded-xl bg-slate-100 p-4 text-sm">
          Division by zero will display an error message.
        </div>

      </div>
    </section>
  )
}

export default UserGuide