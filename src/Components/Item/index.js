import React from 'react';

import './style.css';

const Item = ({ classContent, classBtn }) => {
	return (
		<div className="wrap">
			<div className="content">
				<div className={`circle-content ${classContent}`}>
					<div className={`circle ${classBtn}`} />
				</div>
				<div className={`circle-content ${classContent}`}>
					<div className={`circle ${classBtn}`} />
				</div>
				<div className={`circle-content ${classContent}`}>
					<div className={`circle ${classBtn}`} />
				</div>
			</div>
		</div>
	);
};

export default Item;
