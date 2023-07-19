import './card-list.styles.css';
import Card from "../card/card.component";

const CardList = ({ monsters }) => {
    return (
        <div>
            <div className="card-list">
                {monsters.map((monster) => {
                    return (
                        <Card monster={monster} />
                    )
                })}
            </div>
        </div>
    );
};

export default CardList;