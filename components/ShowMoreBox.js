import { Component } from 'react'

export default class ShowMoreBox extends Component {
	constructor(props) {
		super(props)
		// props is { showingMore : bool }
		this.state = {
			showingMore: props.showingMore ? true : false
		}
		this.props = props
		this.showToggle = this.showToggle.bind(this)
	}

	showToggle(b) {
		this.setState({
			showingMore: b
		})
	}

	render() {
		if (this.state.showingMore) {
			const more = this.props.switch ? this.props.children[0] : this.props.children
			return (
				<div>
					{more}
					<div>

					<a onClick={(e) => this.showToggle(false)}>
					<button className="btn btn-light btn-sm" type="button">Show less</button>
					</a>
					</div>
				</div>
				)
		}
		else {
			const less = this.props.switch ? this.props.children[1] : this.props.children.slice(0, this.props.depth)

			return (
				<div>
				{less}
				<div>
				<a onClick={(e) => this.showToggle(true)}><button className="btn btn-light btn-sm" type="button">Show more</button></a>
				</div>
				</div>
				)
		}
	}
}