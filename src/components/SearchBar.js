import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			realm: '',
		};
	}

	onNameChange = (e) => {
		this.setState({ name: e.target.value });
	};

	onRealmChange = (e) => {
		this.setState({ realm: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		const name = this.state.name.trim().toLowerCase();
		const realm = this.state.realm.trim().toLowerCase();

		if (!name || !realm) {
			return;
		}

		this.props.onFormSubmit({
			name: name,
			realm: realm,
		});

		this.setState({
			name: '',
			realm: '',
		});
	};

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<label htmlFor="name">Name: </label>
				<input
					value={this.state.name}
					onChange={this.onNameChange}
					id="name"
					type="text"
				></input>
				<label htmlFor="realm">Realm:</label>
				<input
					value={this.state.realm}
					onChange={this.onRealmChange}
					htmlFor="realm"
					id="realm"
					type="text"
				></input>
				<input type="submit" value="find me!" />
			</form>
		);
	}
}

export default SearchBar;
