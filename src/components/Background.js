import Container from 'react-bootstrap/Container'

 



export default function Background() {
    return (
           
    <div>
        <Container>
            <figure className="position-relative">
                 <img src="https://www.instacart.com/assets/homepage-hero-background-ec75de0ea80198801094497b46ad920b.jpg" alt="instacart home"/>
                 <figcaption>
                    <h1>Delivery</h1>
                    <h1>Your favorite stores at your door</h1>
                    <h2>Get your groceries while saving time</h2>
                        <div aria-label="serviceType" role="radioGroup" >

                        </div>
                 </figcaption>
            </figure>
        </Container>
    </div>   
    )
        
}