import  './Popup.css'
import { SimpleCard } from '../SimpleCard/SimpleCard'
import { DetailedCard } from '../DetailedCard/DetailedCard'

export const Popup = ({ currentItem, setShowPopup }) => {
    return (
        <div className="popup">
            <div className="popup-content">
                <button
                    className="popup_btn"
                    onClick={() => {
                        setShowPopup(false);
                    }}
                >
                    X
                </button>
                {currentItem.type === 'simple-card' ? <SimpleCard item={currentItem}/> : <DetailedCard item={currentItem}/>}
            </div>
        </div>
    );
};
