import React, { Component } from "react"
import { Button, Form, Image, Label, Message } from 'semantic-ui-react'
import PropTypes from "prop-types"
import { Redirect } from "react-router-dom"

class NewMovieForm extends Component {
	state = {
		_id: this.props.movie ? this.props.movie._id : "",
		title: this.props.movie ? this.props.movie.title : "",
		cover: this.props.movie ? this.props.movie.cover : "",
		errors: {},
		redirect: false
	}

	static  propTypes = {
		onNewMovieSubmit: PropTypes.func.isRequired
	}

	componentWillReceiveProps (nextProps) {
		const { movie } = nextProps.newMovie;

		if (movie.title && movie.title !== this.state.title) {
			this.setState({
				title: movie.title,
				cover: movie.cover
			})
		}
	}
	
	validate () {
		const errors = {}
		if (!this.state.title) {
			errors.title = "Can't be blank."
		}

		if (!this.state.cover) {
			errors.cover = "Can't be blank."
		}

		return errors;
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit = (e) => {
		const errors = this.validate()
		this.setState({
			errors,
			redirect: true
		})

		const _id = this.state._id || this.props.newMovie.movie._id;

		if (Object.keys(errors).length === 0) {
			if (!_id) {
				this.props.onNewMovieSubmit(this.state)
			} else {
				this.props.onUpdateMovieSubmit({ ...this.state, _id })
			}
		}
	}

	render () {
		const { errors } = this.state;

		const form = (
			<Form onSubmit={this.onSubmit} loading={this.props.newMovie.fetching || this.props.newMovie.movie.fetching}>
				{
					this.props.newMovie.error.response && <Message negative>
						<p>{this.props.newMovie.error.response.statusText}</p>
					</Message>
				}

				<Form.Field error={!!errors.title}>
					<label>Title</label>
					<input
						type="text"
						id="title"
						name="title"
						value={this.state.title}
						onChange={this.handleChange}
					/>
					{ errors.title && <Label basic color='red' pointing>{errors.title}</Label> }
				</Form.Field>

				<Form.Field error={!!errors.cover}>
					<label>Cover URL</label>
					<input
						type="text"
						id="cover"
						name="cover"
						value={this.state.cover}
						onChange={this.handleChange}
						/>
					{ errors.cover && <Label basic color='red' pointing>{errors.cover}</Label> }
				</Form.Field>

				<Image src={this.state.cover}></Image>

				<Button type='submit'>Submit</Button>
			</Form>
		)

		return (
			<div>
				{
					this.props.newMovie.done && this.state.redirect
						? <Redirect to="/movies"></Redirect>
						: form
				}
				
			</div>
		)
	}
}


export default NewMovieForm

