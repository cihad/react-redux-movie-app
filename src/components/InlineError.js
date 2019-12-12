import React from "react"
import PropTypes from "prop-types"

const InlineError = ({message}) => {
	return (
		<div className={"ui pointing red basic label"}>{message}</div>
	)
}

InlineError.propTypes = {
	message: PropTypes.string.isRequired
}

export default InlineError;