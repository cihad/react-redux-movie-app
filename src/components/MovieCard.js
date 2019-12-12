import React from 'react'
import { Button, Card, Grid, Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom"

const extra = (movie, deleteMovie) => (
	<div className="ui two buttons">
		<Button animated size="mini" as={Link} to={`/movie/${movie._id}`}>
			<Button.Content hidden>Edit</Button.Content>
			<Button.Content visible>
				<Icon name='edit' />
			</Button.Content>
		</Button>
		<Button animated size="mini" onClick={() => deleteMovie(movie._id)}>
			<Button.Content hidden>Delete</Button.Content>
			<Button.Content visible>
				<Icon name='trash' />
			</Button.Content>
		</Button>
	</div>
)

const MovieCard = ({ movie, deleteMovie }) => (
	<Grid.Column>
		<Card
		  image={movie.cover}
		  header={movie.title}
		  extra={extra(movie, deleteMovie)}
		/>
	</Grid.Column>
)

export default MovieCard