import Calculator from "./components/Calculator"
import UserGuide from "./components/UserGuide"

function App() {
  return (
    <main className="min-h-screen bg-slate-100">

      <header className="bg-slate-900 px-6 py-8 text-center text-white">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Calculator na maangas
        </h1>

      
      </header>

      <section className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-10 px-5 py-12 lg:flex-row lg:items-start">

        <div>
          <h2 className="mb-5 text-center text-xl font-bold text-slate-800">
            Calculator
          </h2>

          <Calculator />
        </div>

        <UserGuide />

      </section>


    </main>
  )
}

export default App