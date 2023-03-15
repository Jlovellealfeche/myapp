function Promo(props) {
    const styles = {
        
        color: "tomato", 
        fontSize: "40px",
    }
 {/* instead of putting the styles inline you could make it as a variable like this above and declare style property*/} 
    return (
        <div className="promo-selection">
            <div>
                <h1 style={styles}> 
                    {props.heading} Don't miss this deal!
                </h1>
            </div>
            <div>
                <h2> {props.Subheading}Subscribe to my newsletter and get all the shop items at 50% off!</h2>
            </div>
        </div>
    );
};

export default Promo;