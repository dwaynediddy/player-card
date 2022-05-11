import React from 'react'
import styled from 'styled-components'

import LogoImg from '../../assets/lakerslogo.png'

const CardDetails = (props) => {
  return (
    <DetailsContainer>
        <SmallText>shooting guard</SmallText>
        <SpaceHorizontalContar>
            <MediumText>los angeles lakers</MediumText>
            <MediumText>#8#24</MediumText>
        </SpaceHorizontalContar>
        <SpaceHorizontalContar>
            <NavText>previous player</NavText>
            <NavText>next player</NavText>
        </SpaceHorizontalContar>
        <Logo>
            <img src={LogoImg} alt='logo'/>
        </Logo>
    </DetailsContainer>
  )
}

const DetailsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2.5em 6px 0 6px;
    line-height: 1.4;
`

const MediumText = styled.span`
    font-size: 18px;
    color: #fff;
    font-weight: 800;
    text-transform: uppercase;
    `

const SmallText = styled.span`
    font-size: 11px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
`

const NavText = styled.button`
    font-size: 10px;
    background-color: transparent;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 3rem;
    border: none;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: transparent;
        border: 2px solid #fbbe01;
    }
`

const SpaceHorizontalContar = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: auto;
        height: 20px;
    }
`

export default CardDetails