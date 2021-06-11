import React from 'react';

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		console.debug('Child: constructor');
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		console.debug('Child: getDerivedStateFromProps');

		return null;
	}

	componentDidMount() {
		console.debug('Child: componentDidMount');
	}

	shouldComponentUpdate() {
		console.debug('Child: shouldComponentUpdate');

		return true;
	}

	getSnapshotBeforeUpdate() {
		console.debug('Child: getSnapshotBeforeUpdate');
	}

	componentDidUpdate() {
		console.debug('Child: componentDidUpdate');
	}

	componentWillUnmount() {
		console.debug('Child: componentWillUnmount');
	}

	render() {
		console.debug('Child: render');

		return (
			<h1 className="text-muted">Counter: {this.props.value}</h1>
		);
	}
}

export default Counter;
