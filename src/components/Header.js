import React, {useState} from 'react'
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import { selectCars } from '../features/Car/CarSlice';
import { useSelector } from 'react-redux';

function Header() {
    const [burgerState, setBurgerState] = useState(false);
    const cars = useSelector(selectCars)
    return (
        <Container>
            <a>
                <img src="./images/logo.svg" alt="Tesla Icon" />
            </a>
            <Menu>
                {cars && cars.map((car, index) => (
                    <p>
                        <a key={index} href="">
                            {car}
                        </a>
                    </p>
                ))}
            </Menu>
            <RightMenu>
                <a href="#">
                    Shop
                </a>
                <a href="#">
                    Account
                </a>
                <CustomMenu onClick={ () => setBurgerState(true)}/>
            </RightMenu>
            <BurgerNav show={burgerState}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerState(false)} />
                </CloseWrapper>
                {cars && cars.map((car, index) => (
                    <li>
                        <a key={index} href="#">
                            {car}
                        </a>
                    </li>
                ))}
                <li>
                    <a href="#">
                        Existing Inventory
                    </a>
                </li>
                <li>
                    <a href="#">
                        Used Inventory
                    </a>
                </li>
                <li>
                    <a href="#">
                        Trade-in
                    </a>
                </li>
                <li>
                    <a href="#">
                        Cybertruck
                    </a>
                </li>
                <li>
                    <a href="#">
                        Roadster
                    </a>
                </li>
                <li>
                    <a href="#">
                        Test Drive
                    </a>
                </li>
            </BurgerNav>
        </Container>
    );
}

export default Header;

const Container = styled.div`
    min-height : 40px;
    position : fixed;
    display : flex;
    align-items : center;
    justify-content : space-between;
    padding : 0px 20px;
    top : 0;
    left : 0;
    right : 0;
    z-index : 1;
`

const Menu = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    flex : 1;

    a {
        font-size : 15px;
        font-weight : 600;
        padding: 0 20px;
        flex-wrap: nowrap;
    }

    @media(max-width : 800px) {
        display : none;
    }
`
const RightMenu = styled.div`
    display : flex;
    align-items : center;
    a {
        font-size : 15px;
        font-weight : 600;
        padding: 0 30px;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor : pointer;
`
const BurgerNav = styled.div`
    position : fixed;
    top : 0;
    bottom: 0;
    right : 0;
    background : #f0f1f0;
    width : 250px;
    z-index : 2;
    list-style : none;
    padding : 20px;
    display : flex;
    flex-direction : column;
    text-align : start;
    transform : ${props => props.show ? 'translateX(0)' : 'translate(100%)'};
    transition : transform 0.3s ease-in;
    
    li {
        padding : 15px 0;
        border-bottom : 1px solid rgba(0,0,0,0.2);

        a {
            font-weight : 600;
        }
    }
`
const CustomClose = styled(CancelIcon)`
    cursor : pointer;
`

const CloseWrapper = styled.div`
    display : flex;
    justify-content : flex-end;
`