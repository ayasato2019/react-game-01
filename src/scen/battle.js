import React, { useState } from 'react';
import Oponent from "../components/battle/Oponent";
import Player from "../components/battle/Player";
import Message from "../components/battle/Message";

const BattleScene = () => {
	return (
		<div style={battleSceneStyle.battleScene}>
			<Oponent />
			<Player />
			<Message />
		</div>
	);
}

const battleSceneStyle = {
	battleScene: {
        width: '100%',
        height: '100%',
        padding: '10px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
	}
}

export default BattleScene;