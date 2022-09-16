import  './Products.css'
import { useState } from 'react'
import { Popup } from './Popup/Popup'
import { accessories } from '../../accessories'
import { SimpleCard } from './SimpleCard/SimpleCard'
import { DetailedCard } from './DetailedCard/DetailedCard'

export const Products = () => {
    const [currentItem, setCurrentItem] = useState({});
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = (id, category) => {
        const currentItem = accessories[category].find(
            (item) => item.id === id
        );
        setCurrentItem(currentItem);
        setShowPopup(true);
    };

    return (
        <>
            <div>
                <h2 className="products-title">Каталог товаров</h2>
                <div className="products-container">
                    <div className="cases-container">
                        <h2 className="cases-title">Чехлы</h2>
                        <div className="cases-items">
                            {accessories.cases.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            openPopup(item.id, item.category);
                                        }}
                                    >
                                        <SimpleCard item={item}/>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="headphones-container">
                        <h2 className="headphones-title">Наушники</h2>
                        <div className="headphones-items">
                            {accessories.headphones.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            openPopup(item.id, item.category);
                                        }}
                                    >
                                        <DetailedCard  item={item}/>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="wireless-container">
                        <h2 className="wireless-title">
                            Беcпроводные Наушники
                        </h2>
                        <div className="wireless-items">
                            {accessories.wireless.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            openPopup(item.id, item.category);
                                        }}
                                    >
                                        <DetailedCard  item={item}/>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {showPopup && (
                <Popup
                    className="popup"
                    currentItem={currentItem}
                    setShowPopup={setShowPopup}
                />
            )}
        </>
    );
};
