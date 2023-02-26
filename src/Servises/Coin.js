import React from 'react';
import styles from '../Servises/Coin.module.css'

const Coin = ({name,image,symbol,price,priceChange,marketCap}) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt={name}/>
            <span className={styles.name}>{name}</span>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={styles.cuurentPrice}>$ {price.toLocaleString()}</span>
            <span className={priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange }>{priceChange}</span>
            <span className={styles.marketCap}>$ {marketCap.toLocaleString()}</span>

        </div>
    );
};

export default Coin;