import React, {Component} from 'react';

class Error extends Component {
  constructor(props) {
		super(props)
			this.state = {
			error: false
		}

	}

componentDidCatch(error, info) {
    console.log(error, info)
    this.setState({ error: true })
	}

	render() {

		if(this.state.error === true) {
			return (
				<div>
					<h1>Error!  Map didn't load.</h1>
					<p>Try again later.</p>
				</div>
				)
			}
			return this.props.children
		}
}

export default Error
