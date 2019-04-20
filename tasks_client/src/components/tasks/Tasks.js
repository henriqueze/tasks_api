import React, { Component } from 'react';
	import Row from 'react-bootstrap/Row';
	import Cow from 'react-bootstrap/Cow';

	class tasks extends Component {
		render() {
			return (
				<Row>
					<Col xs={{span: 8, offset: 2 }} className="tasks_list">
						<p className="title">To-do</p>
					</Col>
					<Col xs={{ span: 8, offset: 2 }} className="tasks_list">
						<p className="title">Done</p>
					</Col>
				</Row>
			);
		}
	}

	export default Tasks;
