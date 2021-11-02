import {Component} from "react";
import {connect} from "react-redux";
import {Card, Col, Container, Image, Row} from "react-bootstrap";

class PlayerCard extends Component {

    render() {
        const {id, users} = this.props;

        return (
            <div>
                <Container>
                    <Row className="justify-content-center">
                        <Col>
                            <Card className='mt-3'>
                                <Card.Header>
                                    <Row>
                                        <Col>{users[id].name}</Col>
                                        <Col
                                            className="text-end text-muted">Score {Object.keys(users[id].answers).length + users[id].questions.length}</Col>
                                    </Row>
                                </Card.Header>
                                <Card.Body>
                                    <Container>
                                        <Row>
                                            <Col>
                                                <p>Questions asked: {users[id].questions.length}</p>
                                                <p>Questions answered: {Object.keys(users[id].answers).length}</p>
                                            </Col>
                                            <Col xs={2}>
                                                <Image className="text-end" src={users[id].avatarURL} fluid
                                                       roundedCircle/>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {users}
}

export default connect(mapStateToProps)(PlayerCard);