import './DetailedCard.css'
import Accessories from '../../../accessories.json'

export const DetailedCard = () => {
    return (
        <div>
            <div>
                { Accessories && Accessories.map((item, index) => {
                    return (
                        <div key={index} className="accessories">
                            <h2 className="cases-title">Наушники</h2>
                            <div className="headphones" key={index}>
                                {
                                    item.headphones.map( headphones => {
                                            return (
                                                <div className="headphones-item" key={ headphones.id }>
                                                    <img src={ headphones.url } alt="img"/>
                                                    <div className="headphones-info">
                                                        <p>{ headphones.title }</p>
                                                        <p>{ headphones.price }</p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    )
                                }
                            <h2 className="cases-title">Беcпроводные Наушники</h2>
                            <div className="wireless" key={index}>
                                {
                                    item.wireless.map( wireless => {
                                            return (
                                                <div className="wireless-item" key={ wireless.id }>
                                                    <img src={ wireless.url } alt="img"/>
                                                    <div className="wireless-info">
                                                        <p>{ wireless.title }</p>
                                                        <p>{ wireless.price }</p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    )
                                }
                            </div>
                        </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}