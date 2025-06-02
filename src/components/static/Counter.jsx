import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increasebyten, decreasebyten, resetValue, increasebyAmount } from '../static/CountSlice'

const Counter = () => {
    const count = useSelector((state) => state.count.value);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = React.useState('0');

    const handleIncreaseByInput = () => {
        dispatch(increasebyAmount(Number(inputValue)));
        setInputValue('0');
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Counter</h1>
            <div className="flex items-center space-x-4">
                <button
                    onClick={() => dispatch(decreasebyten())}
                    className="px-4 py-2 bg-red-500 text-white rounded"
                >
                    Decrease by 10
                </button>
                <span className="text-xl">{count}</span>
                <button
                    onClick={() => dispatch(increasebyten())}
                    className="px-4 py-2 bg-green-500 text-white rounded"
                >
                    Increase by 10
                </button>
                <button 
                    onClick={() => dispatch(resetValue())}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Reset Value
                </button>
            </div>

            <div style={{ marginTop: "20px" }}>
                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border p-2 rounded"
                    placeholder="Enter a number"
                />
                <button
                    onClick={handleIncreaseByInput}
                    className="ml-2 px-4 py-2 bg-purple-500 text-white rounded"
                >
                    Increase by Input
                </button>
            </div>
        </div>
    )
}

export default Counter