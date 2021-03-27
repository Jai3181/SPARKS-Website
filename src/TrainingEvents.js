import React from 'react'
import ActivityCardMain from './ActivityCardMain'
import { Container,Row,Col} from 'react-bootstrap';

function TrainingEvents() {
    return (
        <div className='TrainingEvents'>
            <Container>
                <Row>
                <ActivityCardMain />
            <ActivityCardMain />
                </Row>
            </Container>
        </div>
    )
}

export default TrainingEvents
