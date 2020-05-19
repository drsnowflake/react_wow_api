import './CharacterDisplay.css';
import React from 'react';

const CharacterDisplay = ({ char, char2 }) => {
	if (!char.character || !char2.level) {
		if (char2.code) {
			return <p>Search for a VALID char</p>;
		} else {
			return <div>Search for a char</div>;
		}
	}

	const charName = () => {
		if (char2.active_title) {
			return char2.active_title.display_string.replace(
				'{name}',
				`${char2.name}`
			);
		} else {
			return char2.name;
		}
	};

	return (
		<>
			<div>
				<p className="name">{charName()}</p>
				<p className="character-details">
					Level: {char2.level} - {char2.race.name} {char2.active_spec.name}{' '}
					{char2.character_class.name}
				</p>
				<p className="ilvl">Item Level: {char2.average_item_level}</p>
				<img src={char.render_url} alt={char.character.name} />
				<div></div>
			</div>
		</>
	);
};

export default CharacterDisplay;
