import Container from 'react-bootstrap/Container'

 



export default function Background() {
    return (
           
    <div style={{ top: "auto", width: "null", marginLeft: "0", marginBottom: "70px", marginTop: "75px"}}>
        <Container>
            <figure className="position-relative">
                 <img src="https://www.instacart.com/assets/homepage-hero-background-ec75de0ea80198801094497b46ad920b.jpg" alt="instacart home"/>
                 <figcaption>
                    <h1>Delivery</h1>
                    <h1>Your favorite stores at your door</h1>
                    <h2>Get your groceries while saving time</h2>
                        <div aria-label="serviceType" role="menuitem">
                            <span className="caret">
                                <input type="radio" name="service_options" value="delivery" tabIndex={0} checked></input>
                                <label for="delivery">Delivery</label>
                            </span>
                            <span class="">
                            <input type="radio" aria-checked="false" id="pickup" name="service_options" value="pickup" tabIndex={-1}></input>
                            <label for="pickup">Pickup</label>
                            </span>

                        </div>
                 </figcaption>
            </figure>
        </Container>
    </div>   
    )
        
}