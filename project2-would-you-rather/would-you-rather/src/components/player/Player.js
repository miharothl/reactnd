import {Component} from "react";
import {connect} from "react-redux";
import {Col, Container, Image, Row} from "react-bootstrap";

class Player extends Component {

    render() {
        const {id, users} = this.props;

        return (
            <Container>
                <Row>
                    <Col xs={3} >
                        <p> </p>
                    </Col>
                    <Col xs={1} >
                        <Image className="text-end" src={users[id].avatarURL} fluid roundedCircle/>
                    </Col>
                    <Col>
                        {users[id].name}
                    </Col>
                    <Col>
                        {Object.keys(users[id].answers).length + users[id].questions.length}
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps({users}) {
    return {users}
}

export default connect(mapStateToProps)(Player);