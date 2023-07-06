import { ContainerProps } from '../../store/types';
import '../../appstyles/common/ContainerBoard.scss';
import { Col, Container, Row } from 'react-bootstrap';

function ContainerBoard(props:ContainerProps) {
  return (
    <Container className='container_board' fluid>
      <Row>
        <Col>{props.children}</Col>
      </Row>
    </Container>
  );
}

export default ContainerBoard;