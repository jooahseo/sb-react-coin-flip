import "./Coin.css";

function Coin(props) {
    return(
        <div className="coin">
            <img className="coin-image" src={props.src}/>
        </div>
    )
}
export default Coin;