
import {useParams} from 'react-router-dom';
import { useState, useEffect} from 'react';


const Stocks = (props) => {
    
const {symbol} = useParams();
const [coin, setCoin] = useState(null);

const getStock = async () => {
    const data = await Response.json();
        setCoin(data);
};
    useEffect(() => {
        setCoin();
    }, []);
    
    const loaded = () => {
        return(
    <div>
            <h1>{coin.price}</h1>
            <h2>{coin.name}</h2>
    </div>

);
}
const loading = () => {
    return <h1>loading...</h1>
};
return coin ? loaded() : loading();

};

export default Stocks;