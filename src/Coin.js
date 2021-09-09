import "./Coin.css";

function Coin(props) {
    return(
        <div>
            <img className="coin-image" src={props.src} alt={props.alt}/>
        </div>
    )
}
export default Coin;