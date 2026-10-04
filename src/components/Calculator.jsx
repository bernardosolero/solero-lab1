import { useEffect, useState } from "react"
import CalculatorButton from "./CalculatorButton"

function Calculator() {
  const [display, setDisplay] = useState("0")
  const [firstNumber, setFirstNumber] = useState(null)
  const [operator, setOperator] = useState(null)
  const [waitingForNumber, setWaitingForNumber] = useState(false)

  const inputNumber = (number) => {
    if (display === "Error" || waitingForNumber) {
      setDisplay(number)
      setWaitingForNumber(false)
    } else {
      setDisplay(display === "0" ? number : display + number)
    }
  }

  const inputDecimal = () => {
    if (display === "Error" || waitingForNumber) {
      setDisplay("0.")
      setWaitingForNumber(false)
      return
    }

    if (!display.includes(".")) {
      setDisplay(display + ".")
    }
  }

  const chooseOperator = (selectedOperator) => {
    if (display === "Error") {
      clearCalculator()
      return
    }

    setFirstNumber(Number(display))
    setOperator(selectedOperator)
    setWaitingForNumber(true)
  }

  const calculate = () => {
    if (firstNumber === null || operator === null) {
      return
    }

    const secondNumber = Number(display)
    let result

    if (operator === "+") {
      result = firstNumber + secondNumber
    }

    if (operator === "-") {
      result = firstNumber - secondNumber
    }

    if (operator === "×") {
      result = firstNumber * secondNumber
    }

    if (operator === "÷") {
      if (secondNumber === 0) {
        setDisplay("Error")
        setFirstNumber(null)
        setOperator(null)
        return
      }

      result = firstNumber / secondNumber
    }

    setDisplay(String(Number(result.toFixed(10))))
    setFirstNumber(null)
    setOperator(null)
    setWaitingForNumber(true)
  }

  const clearCalculator = () => {
    setDisplay("0")
    setFirstNumber(null)
    setOperator(null)
    setWaitingForNumber(false)
  }

  useEffect(() => {
  const handleKeyboard = (event) => {
    if (event.key >= "0" && event.key <= "9") {
      inputNumber(event.key)
    }

    if (event.key === ".") {
      inputDecimal()
    }

    if (event.key === "+") {
      chooseOperator("+")
    }

    if (event.key === "-") {
      chooseOperator("-")
    }

    if (event.key === "*") {
      chooseOperator("×")
    }

    if (event.key === "/") {
      event.preventDefault()
      chooseOperator("÷")
    }

    if (event.key === "Enter" || event.key === "=") {
      calculate()
    }

    if (event.key === "Escape") {
      clearCalculator()
    }
  }

  window.addEventListener("keydown", handleKeyboard)

  return () => {
    window.removeEventListener("keydown", handleKeyboard)
  }
})

  return (
    <div className="w-full max-w-sm rounded-3xl bg-slate-900 p-5 shadow-2xl">

      <div className="mb-5 flex h-24 items-center justify-end overflow-hidden rounded-2xl bg-slate-800 px-5">
        <p className="text-right text-4xl font-semibold text-white">
          {display}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-3">

        <CalculatorButton
          onClick={clearCalculator}
          className="col-span-3 bg-red-500 text-white"
        >
          AC
        </CalculatorButton>

        <CalculatorButton
          onClick={() => chooseOperator("÷")}
          className="bg-orange-500 text-white"
        >
          ÷
        </CalculatorButton>

        <CalculatorButton onClick={() => inputNumber("7")} className="bg-slate-700 text-white">
          7
        </CalculatorButton>

        <CalculatorButton onClick={() => inputNumber("8")} className="bg-slate-700 text-white">
          8
        </CalculatorButton>

        <CalculatorButton onClick={() => inputNumber("9")} className="bg-slate-700 text-white">
          9
        </CalculatorButton>

        <CalculatorButton
          onClick={() => chooseOperator("×")}
          className="bg-orange-500 text-white"
        >
          ×
        </CalculatorButton>

        <CalculatorButton onClick={() => inputNumber("4")} className="bg-slate-700 text-white">
          4
        </CalculatorButton>

        <CalculatorButton onClick={() => inputNumber("5")} className="bg-slate-700 text-white">
          5
        </CalculatorButton>

        <CalculatorButton onClick={() => inputNumber("6")} className="bg-slate-700 text-white">
          6
        </CalculatorButton>

        <CalculatorButton
          onClick={() => chooseOperator("-")}
          className="bg-orange-500 text-white"
        >
          −
        </CalculatorButton>

        <CalculatorButton onClick={() => inputNumber("1")} className="bg-slate-700 text-white">
          1
        </CalculatorButton>

        <CalculatorButton onClick={() => inputNumber("2")} className="bg-slate-700 text-white">
          2
        </CalculatorButton>

        <CalculatorButton onClick={() => inputNumber("3")} className="bg-slate-700 text-white">
          3
        </CalculatorButton>

        <CalculatorButton
          onClick={() => chooseOperator("+")}
          className="bg-orange-500 text-white"
        >
          +
        </CalculatorButton>

        <CalculatorButton
          onClick={() => inputNumber("0")}
          className="col-span-2 bg-slate-700 text-white"
        >
          0
        </CalculatorButton>

        <CalculatorButton
          onClick={inputDecimal}
          className="bg-slate-700 text-white"
        >
          .
        </CalculatorButton>

        <CalculatorButton
          onClick={calculate}
          className="bg-green-500 text-white"
        >
          =
        </CalculatorButton>

      </div>
    </div>
  )
}

export default Calculator