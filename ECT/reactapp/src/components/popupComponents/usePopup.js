import { useState } from 'react';

export const usePopup = () => {
	const [isShowing, setIsShowing] = useState(false);

	function toggle() {
		setIsShowing(!isShowing);
	}

	return [
		isShowing,
		toggle
	];
}
