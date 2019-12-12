import {
	FETCH_MOVIES_PENDING,
	FETCH_MOVIES_FULFILLED,
	FETCH_MOVIES_REJECTED,
	DELETE_MOVIE_PENDING,
	DELETE_MOVIE_FULFILLED,
	DELETE_MOVIE_REJECTED,
} from '../actions/movies';

const initialState = {
	fetching: false,
	movieList: [],
	error: {}
};

export default (state = initialState, action) => {
	// debugger;
	switch (action.type){
		case FETCH_MOVIES_PENDING:
			return {
				...state,
				fetching: true
			};
		case FETCH_MOVIES_FULFILLED:
			return {
				...state,
				fetching: false,
				movieList: action.payload
			};
		case FETCH_MOVIES_REJECTED:
			return {
				...state,
				fetching: false,
				error: action.payload
			};


		case DELETE_MOVIE_PENDING:
			return {
				...state
			};
		case DELETE_MOVIE_FULFILLED:
			return {
				...state,
				movieList: state.movieList.filter(movie => movie._id !== action.payload.id)
			};
		case DELETE_MOVIE_REJECTED:
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
}