import './CharacterContainer.css';
import React, { Component } from 'react';

import SearchBar from '../components/SearchBar';
import CharacterDisplay from '../components/CharacterDisplay';

class ChraracterContainer extends Component {
	state = {
		char: {},
		char2: {},
	};

	findChar = (charInfo) => {
		const API_KEY = process.env.REACT_APP_WOW_KEY;
		const URL = `https://eu.api.blizzard.com/profile/wow/character/${charInfo.realm}/${charInfo.name}/character-media?namespace=profile-eu&locale=en_GB&access_token=${API_KEY}`;
		fetch(URL)
			.then((res) => res.json())
			.then((json) => this.setState({ char: json }))
			.catch((err) => console.log(err));

		const URL2 = `https://eu.api.blizzard.com/profile/wow/character/${charInfo.realm}/${charInfo.name}?namespace=profile-eu&locale=en_GB&access_token=${API_KEY}`;
		fetch(URL2)
			.then((res) => res.json())
			.then((json) => this.setState({ char2: json }))
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div className="ui container">
				<h2>WoW Char Searcher</h2>
				<SearchBar onFormSubmit={this.findChar} />
				<CharacterDisplay char={this.state.char} char2={this.state.char2} />
			</div>
		);
	}
}

export default ChraracterContainer;
