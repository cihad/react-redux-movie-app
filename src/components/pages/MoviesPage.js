import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
	fetchMovies,
	deleteMovie
} from "../../actions/movies"
import MoviesList from "../MoviesList"

class MoviesPage extends Component {
	static propTypes = {
		movies: PropTypes.object.isRequired,
		deleteMovie: PropTypes.func.isRequired
	}

	componentDidMount () {
		this.props.fetchMovies()
	}

	render () {
		return (
			<div>
				<h2>Movies</h2>
				<MoviesList
					movies={this.props.movies}
					deleteMovie={this.props.deleteMovie}
				/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		movies: state.movies
	}
}

const mapDispatchToProps = {
	fetchMovies,
	deleteMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)

