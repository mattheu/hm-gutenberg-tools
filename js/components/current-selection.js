import React from 'react';
import PropTypes from 'prop-types'
import wp from 'wp';

const { Spinner } = wp.components;
const { __ } = wp.i18n;

const CurrentSelection = ( {
	posts,
	isLoading,
	title,
} ) => (
	<div className="hm-post-control-current-selection">
		<h4>{ title }</h4>
		{ isLoading && (
			<Spinner style={ { float: 'none' } } />
		) }
		{ posts.length > 0 && ! isLoading && (
			<ul className="hm-post-select-control-list">
				{ posts.map( post => (
					<li key={ post.id }>{ post.title.rendered }</li>
				) ) }
			</ul>
		) }
	</div>
);

CurrentSelection.defaultProps = {
	posts: [],
	isLoading: false,
	title: __( 'Current Selection' ),
}

CurrentSelection.propTypes = {
	posts: PropTypes.arrayOf( PropTypes.object ),
	isLoading: PropTypes.boolean,
	title: PropTypes.string,
}

export default CurrentSelection;