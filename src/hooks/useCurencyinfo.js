import { useEffect, useState } from "react";


function useCurrencyinfo(currency) {
    const [fetchData , setFatchData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setFatchData(res[currency]))
        // console.log(fetchData);
    }, [currency])

    // console.log(fetchData);
    return fetchData
}
export default useCurrencyinfo


