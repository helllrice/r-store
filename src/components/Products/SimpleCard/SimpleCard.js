import './SimpleCard.css'

export const SimpleCard = ({ item }) => {
    return (
        <div>
            <div className="simple-card">
                <div className="simple-card-item">
                    <img src={item.url} alt="img" />
                    <p>{item.title}</p>
                </div>
            </div>
        </div>
    );
};
