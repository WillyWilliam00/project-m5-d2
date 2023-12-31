import {Row, Col, Container} from "react-bootstrap";


function Jumbotron() {
    return (
        <Container>
            
                <div class="jumbotron">
                    <h1 class="display-4 fw-bolder">EPICBOOKS</h1>
                    <p class="lead">Esplora mondi infiniti tra le pagine di un libro...</p>
                    
                    <Row className='d-flex justify-content-center'>
                        <Col xs={12 }sm={6}>
                        <img
                            alt="book"
                            src="https://images.pexels.com/photos/2203051/pexels-photo-2203051.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            className="d-inline-block align-top jumbo-img rounded-4"
                        />
                        </Col>
                        <Col xs={12}sm={6} className='d-flex align-items-end'>
                        <p>In un mondo dove ogni pagina è una porta segreta verso mondi straordinari, 
                            il nostro ecommerce di libri ti offre un viaggio senza fine tra storie coinvolgenti, 
                            saggi illuminanti e avventure epiche. Benvenuto a bordo, esplora e trova 
                            il tuo prossimo grande libro con noi...</p>
                        </Col>
                        
                    </Row>
                </div>

            
        </Container>
    )
}

export default Jumbotron