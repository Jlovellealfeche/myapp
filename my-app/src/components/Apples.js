function Apples(props)  {
    return (
        <div className="promo-selection">
            <div>
                <h2>These apples are: {props.color}</h2>
                </div>
                <div>
                <h3>There are {props.number} apples.</h3>
            </div>
        </div>
    );
}





export default Apples;
