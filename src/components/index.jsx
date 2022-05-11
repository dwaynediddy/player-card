import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import styled from 'styled-components'

import Mamba from './../assets/mamba.png'
import CardDetails from './card/CardDetails'

const Card = (props) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const rotateX = useTransform(y, [-100, 100], [30, -30])
    const rotateY = useTransform(x, [-100, 100], [-30, 30])

  return (
    <CardWrapper>
        <CardContainer 
            style={{ x, y, rotateX, rotateY, z: 100 }} 
            drag 
            dragElastic={0.16} 
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: 'grabbing'}}
        >
            <TopContainer>
                <CircleWrapper>
                    <Circle />
                </CircleWrapper>
                <ImageWrapper>
                    <Player 
                        style={{ x, y, rotateX, rotateY, z: 10000 }}
                         drag
                         dragElastic={0.12}
                         whileTap={{ cursor: 'grabbing' }}
                    >
                        <img src={Mamba} alt='kobe' />
                    </Player>
                </ImageWrapper>
                <CardText>Kobe Bryant</CardText>
            </TopContainer>
            <BottomContainer>
                <CardDetails />
            </BottomContainer>
        </CardContainer>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const CardContainer = styled(motion.div)`
    width: 285px;
    height: 500px;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    box-shadow: 0 2px 7px 2px rgba(31, 31, 31, 0.2);
    background-color: #1d1f21;
    color: #fff;
    position: relative;
    cursor: grab;
`

const CircleWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    overflow: hidden;
    border-top-right-radius: 25px;
`

const Circle = styled.div`
    position: absolute;
    width: 350px;
    height: 350px;
    top: -4.2em;
    right: -10em;
    z-index: 5;
    background-color: #fbbe01;
    border-radius: 50%;
`

const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1.2;
    position: relative;
    align-items: center;
    justify-content: flex-end;
    padding: 1em 15px;
`

const BottomContainer = styled.div`
    display: flex;
    flex: 0.8;
    padding: 0 1em;
`

const CardText = styled.h1`
    color: #fff;
    text-transform: uppercase;
    margin: -10px 0;
    z-index: 10;
    font-size: 44px;
    font-weight: 800;
`

const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const Player = styled(motion.div)`
    width: auto;
    height: 220px;
    z-index: 99;
    user-select: none;
    margin-right: 3em;
    margin-top: 3em;

    img {
        width: auto;
        height: 100%;
        user-select: none;
    }
`

export default Card