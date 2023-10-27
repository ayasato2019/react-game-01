import React, { useState } from 'react';
import Oponent from "../components/battle/Oponent";
import Player from "../components/battle/Player";
import Message from "../components/battle/Message";
import { STATUS } from "../constants/battle-constants";

const BattleScene = () => {
	const BattleScene = () => {
		const [status, setStatus] = useState(STATUS.BATTLE_START);
		const [messageText, setMessageText] = useState(`あ！ 野性の\n SQLインジェクションがあらわれた！`);
		//const [ステート名, ステート更新用関数名] = useState(デフォルト値);
	}

	// const onClickHandle = () => {
	// 	switch (status) {
	// 		case STATUS.BATTLE_START:goToMainCommand();
	// 		break;

	// 	default:
	// 		break;
	// 	}
	// }

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