import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Title = styled.h3`
  font-size: 20px;
`

const Content = styled.p`
  font-size: 16px;
`
const NoteBox = styled.div`
  margin: 40px;
  padding: 20px;
  width: 320px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  cursor: pointer;
`

const Tag = styled.span`
  font-size: 12px;
  color: #3850a2;
`

const Date = styled.time`
  font-size: 12px;
  color: #3850a2;
`

class Note extends Component {
  render() {
    return (
      <NoteBox onClick={this.props.onClick}>
        <Tag>note</Tag>
        <Title>{this.props.title}</Title>
        <Content>{this.props.content}</Content>
        <Date>2018.01.01 12:00</Date>
      </NoteBox>
    )
  }
}

Note.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default Note
