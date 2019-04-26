import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import Logo from '../../components/logo/'
import { Button } from '../../components/button/'
import Avatar from '../../views/avatar/'

const StyledHeader = styled.div`
  height: 60px;
  padding: 10px 24px;
  background-color: white;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  border-bottom: ${props =>
    props.shadow ? '1px solid ' + props.theme.border.default : 'none'};
`

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;
`

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ThisButton = styled(Button)`
  margin-right: 24px;
`

class AuthHeader extends Component {
  render() {
    const { isAuthenticated, user } = this.props.user

    const pathname = this.props.location && this.props.location.pathname
    let isHome = pathname == '/' || pathname == '/about'

    return (
      <StyledHeader shadow={!isHome}>
        <Wrapper>
          <Logo />
          <FlexBox>
            <Avatar />
          </FlexBox>
        </Wrapper>
      </StyledHeader>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default withRouter(connect(mapStateToProps)(AuthHeader))
