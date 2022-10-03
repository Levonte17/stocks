import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Stocks = (props) => {
    const apiKey = "04e778150973ea4a6af60a69242db95d";
    const { symbol } = useParams();
    const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`;
    const [stock, setStock] = useState(null);

    const getStock = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setStock(data);
    };

    useEffect(() => {
        getStock();
    }, []);

    const loaded = () => {
        return (
            <div>
                <h1>Name: {stock[0].companyName}</h1>
                <h2>Price: {stock[0].price}</h2>
            </div>
        );
    };

    const loading = () => {
        return <h1>Loading...</h1>
    };

    return stock ? loaded() : loading();

};

export default Stocks;