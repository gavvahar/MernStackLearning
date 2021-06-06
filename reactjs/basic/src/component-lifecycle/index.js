import React from 'react';
import Counter from './Counter';

const style = {
	marginTop: '40px',
	marginBottom: '0px'
};

class ComponentLifeCycle extends React.Component {
	constructor(props) {
		super(props);
		console.debug('Parent: constructor');
		this.state = {
			counter: 0,
			show: false
		};

		this.toggle = this.toggle.bind(this);
		this.incrementCounter = this.incrementCounter.bind(this);
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		console.debug('Parent: getDerivedStateFromProps');

		return null;
	}

	componentDidMount() {
		console.debug('Parent: componentDidMount');
	}

	shouldComponentUpdate() {
		console.debug('Parent: shouldComponentUpdate');

		return true;
	}

	getSnapshotBeforeUpdate() {
		console.debug('Parent: getSnapshotBeforeUpdate');

		return null;
	}

	componentDidUpdate() {
		console.debug('Parent: componentDidUpdate');
	}

	componentWillUnmount() {
		console.debug('Parent: componentWillUnmount');
    
	}

	toggle() {
		this.setState({
			show: !this.state.show
		});
	}

	incrementCounter() {
		this.setState({
			counter: this.state.counter + 1
		});
	}

	render() {
		console.debug('Parent: render');

		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-6 col-sm-offset-3 text-center">
						<p style={style}>
              Make sure to open Developer Tools Console before you click
              anything.
						</p>
						<div
							className="btn-group btn-group-lg"
							role="group"
							aria-label="..."
							style={style}
						>
							<button
								type="button"
								className="btn btn-default"
								onClick={this.toggle}
							>
								{this.state.show ? 'Hide' : 'Show'}
							</button>
							<button
								type="button"
								className="btn btn-success"
								onClick={this.incrementCounter}
							>
                Increment
							</button>
						</div>

						{this.state.show && <Counter value={this.state.counter} />}
					</div>
				</div>
			</div>
		);
	}
}

export default ComponentLifeCycle;
