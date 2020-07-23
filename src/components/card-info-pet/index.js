import React from 'react';
import {
	onlyDate,
	fromNow,
	prettyFormat,
} from '../../helpers/pretty-date.helper';
import { prettyType } from '../../helpers/pretty_type.helper';

const CardInfoPet = (props) => {
	const { created_at, owner_id, action_type, description } = props;

	return (
		<article className='timeline__item'>
			<p className='timeline__item__type'>{prettyType[action_type]}</p>
			<p className='timeline__item__description'>{description}</p>

			<div className='timeline__item__bottom'>
				<p className='timeline__item__bottom__creator'>{owner_id}</p>

				<time
					dateTime={onlyDate(created_at)}
					className='timeline__item__bottom__create-at'
				>
					{prettyFormat(created_at)} <small>({fromNow(created_at)})</small>
				</time>
			</div>
		</article>
	);
};

export default CardInfoPet;
