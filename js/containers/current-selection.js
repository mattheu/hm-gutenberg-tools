import wp from 'wp';

import CurrentSelection from '../components/current-selection';

const { withSelect } = wp.data;

export default withSelect( ( select, ownProps ) => {
	const { getEntityRecords } = select( 'core' );
	const { postIds, postType } = ownProps;
	const posts = getEntityRecords( 'postType', postType, { include: postIds } )

	return {
		posts,
		isLoading: ! posts,
	}
} )( CurrentSelection );