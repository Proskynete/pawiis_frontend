import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const FormPet = (props) => {
	const { show, classes } = props;

	return (
		<Row className={classes}>
			<Col>
				<Card className={`collapse  ${show ? 'show' : ''}`}>
					<Card.Body>
						Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
						terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
						labore wes anderson cred nesciunt sapiente ea proident.
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};

export default FormPet;
