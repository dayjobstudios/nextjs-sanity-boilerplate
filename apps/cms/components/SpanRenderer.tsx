import PropTypes from 'prop-types'
import React from 'react'

export const SpanRenderer = (props: any) => (
  <span style={{ backgroundColor: 'rgba(0, 255, 0, 0.15)' }}>
    {props.children}
  </span>
)

SpanRenderer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SpanRenderer
