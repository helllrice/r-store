import './SimpleCard.css'
import Accessories from '../../../accessories.json'

export const SimpleCard = () => {
    return (
        <div>
            { Accessories && Accessories.map((item, index) => {
                return (
                    <div key={index} className="accessories">
                        <h2 className="cases-title">Чехлы</h2>
                        <div className="cases" key={index}>
                            {
                                item.cases.map( cases => {
                                        return (
                                            <div className="cases-item" key={ cases.id }>
                                                <img src={ cases.url } alt="img"/>
                                                <p>{ cases.title }</p>
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                </div>

                )
            })}
        </div>
            )
}