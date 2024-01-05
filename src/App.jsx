
import { useState } from 'react'
import './App.css'
import { InputBox } from './componants'
import useCurrencyInfo from './hooks/useCurencyinfo'

function App() {

    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")

    const [result, setResult] = useState(0)

    const curencyinfo = useCurrencyInfo(from)

    const options = Object.keys(curencyinfo)
    

    const swap = () => {
        setFrom(to)
        setTo(from)
        setResult(amount)
        setAmount(result)
    }

    const finalResult = () => {
        setResult(amount * curencyinfo[to])
    }


    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundColor: "black"
            }}
        >

            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            finalResult()

                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                amountChange = {(amount)=> setAmount(amount)}
                                currencyChange={(curency) => setAmount(curency)}
                                curencyOption={options}
                                selectCurency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={result}
                                amountChange
                                currencyChange={(curency) => setTo(curency)}
                                curencyOption={options}
                                selectCurency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                        >
                            Convert
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
