import {Row, Col, Card, Container} from "react-bootstrap";
import fantasy from "./books/fantasy.json";

function TableBook() {
    

    return (

        <Container className="my-5">
            <Row className="row-gap-5">
                {fantasy.map((book) => (
                    <Col xs={12} sm={6} lg={3}>
                        <Card>
                            <Card.Img style={{height: 350}} variant="top" src={book.img} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    {book.title}
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>

                    </Col>

                ))}

            </Row>
        </Container>



    );

}

export default TableBook
