import React,{useEffect,useState} from 'react';
import { getCoin } from '../api'
import Loader from './Loader'
import styles from '../Servises/Landing.module.css'
import Coin from './Coin'
const Landing = () => {

    useEffect (() => {
      const fetchAPI = async () => {
          const data = await getCoin();
          console.log(data)
          setCoins(data)
      }
        fetchAPI();
    },[])
    const [coins,setCoins]= useState([]);
    const [search,setSearch] = useState("");
    
    const SearchHandler = event => {
        setSearch(event.target.value)
    }
    const searchCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()) )
    return (
        <>
            <input className={styles.input} type="text" placeholder="Search..." value={search} onChange={SearchHandler} />

            {coins.length ?    <div className={styles.coinContainer} > 

            {searchCoins.map(coin => <Coin
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                price={coin.current_price}
                marketCap={coin.market_cap}
                priceChange={coin.price_change_percentage_24h}
            
            
            />
            
                )}




            </div> :  <Loader/>

}
          

     



        </>

    );
};

export default Landing;