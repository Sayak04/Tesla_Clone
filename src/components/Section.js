import React from 'react'
import styled from 'styled-components'
import LightSpeed from 'react-reveal/LightSpeed';


function Section(props) {
    console.log(props);
    return (
        <Wrap bgImg={props.backgroundImg}>
            <LightSpeed left>
                <ItemText>
                    <h1>
                        {props.title}
                    </h1>
                    <p>
                        {props.description}
                    </p>
                </ItemText>
            </LightSpeed>
            <Buttons>
                <LightSpeed right>
                    <ButtonGroup>
                        <LeftButton>
                            {props.leftBtnText}
                        </LeftButton>
                        {/*  if the right button exists then only we'll show this button */}
                        {props.rightBtnText &&
                            <RightButton>
                                {props.rightBtnText}
                            </RightButton>
                        }
                    </ButtonGroup>
                </LightSpeed>
                <DownArrow src="./images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width : 100vw;
    height : 100vh;
    background-size : cover;
    background-position : center;
    background-repeat : no-repeat;
    background-image : url("./images/model-s.jpg");
    display : flex;
    flex-direction : column;
    ${'' /* for evrtical alignment */}
    justify-content : space-between;
    ${'' /*for horizontal alignment  */}
    align-items : center;
    background-image : ${props => `url("./images/${props.bgImg}")`}
`

const ItemText = styled.div`
    padding-top : 15vh;
    text-align : center;
`

const Buttons = styled.div`
`

const ButtonGroup = styled.div`
    display : flex;
    margin-bottom : 30px;
    @media (max-width : 768px) {
        flex-direction : column;
    }
`

const LeftButton = styled.div`
    background-color : rgba(23,26,32,0.8);
    height : 40px;
    width : 256px;
    color : white;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius : 100px;
    opacity : 0.85;
    text-transform : uppercase;
    font-size : 12.5px;
    cursor : pointer;
    margin : 10px;
    font-weight : 550;
    letter-spacing : 0.6px
`

// to inherit the CSS of the LeftButton
const RightButton = styled(LeftButton)`
    background-color : #f1f1f1f1;
    color : rgba(23,26,32,0.8);
`

const DownArrow = styled.img`
    height : 35px;
    cursor : pointer;
    animation : animateDown infinite 1.5s;
    overflow : hidden;
`