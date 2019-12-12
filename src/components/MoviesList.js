import React from "react"
import PropTypes from "prop-types"
import MovieCard from './MovieCard.js'
import { Grid } from "semantic-ui-react"
import { PulseLoader } from "react-spinners"

const MoviesList = ({ movies, deleteMovie }) => {
	const emptyMessage = <p>There are no movies yet.</p>
	const moviesList = (
		<div>
			<PulseLoader loading={movies.fetching} />
			{
				movies.error.response
					? <h3>Error retrieving data!</h3>
					: <Grid columns={3}>
						{
							movies.movieList.map(
								movie => (
									<MovieCard
										key={movie._id}
										movie={movie}
										deleteMovie={deleteMovie}
									/>
								)
							)
						}
					  </Grid>
			}
		</div>
	)
	return (
		<div>
			{ movies.length === 0 ? emptyMessage : moviesList }
		</div>
	)
}

MoviesList.propTypes = {
	movies: PropTypes.shape({
		movieList: PropTypes.array.isRequired
	}).isRequired
};

export default MoviesList

