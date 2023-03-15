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

function Pears(props) {
    return (
        <h2>I dont like, pears but my friend, {props.friend}, does</h2>
    );
};



export default Apples;
