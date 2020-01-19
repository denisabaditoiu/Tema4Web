import React, { Component } from 'react';

class RobotForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			type: '',
			mass: ''
		}
	}

	updateInput = field => e => {
		this.setState({
			[field]: e.target.value
		})
	};

	onAdd = e => {
		e.preventDefault();
		const { name, type, mass } = this.state;
		this.props.onAdd({
			name: name,
			type: type,
			mass: mass
		});
		this.setState({
			name: '',
			type: '',
			mass: ''
		})
	};

	render() {
		const { name, type, mass } = this.state;
		return (
			<form>
				<input id="name" type="text" placeholder="Robot name" value={ name }
					   onChange={ this.updateInput('name') }/>
				<input id="type" type="text" placeholder="Robot type" value={ type }
					   onChange={ this.updateInput('type') }/>
				<input id="mass" type="text" placeholder="Robot mass" value={ mass }
					   onChange={ this.updateInput('mass') }/>
				<button type="submit" value="add" onClick={ this.onAdd }>add</button>
			</form>
		)
	}
}

export default RobotForm;