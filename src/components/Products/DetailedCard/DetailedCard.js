import "./DetailedCard.css";

export const DetailedCard = ({ item }) => {
    return (
        <div>
            <div className="detailed-card">
                <div className="detailed-card-item">
                    <img src={ item.url } alt="img" />
                    <div className="detailed-card-info">
                        <p>{ item.title }</p>
                        <p>{ item.price }</p>
                    </div>
                </div>
            </div>
        </div>
    )
};
