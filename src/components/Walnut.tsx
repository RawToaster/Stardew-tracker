import ReactLogo from '../assets/react.svg'
import CheckBox from './CheckBox'
import styled from 'styled-components'

const WalnutContainer = styled.div`
    width: 10rem;
    height: 8rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    border: .2rem double #db7a04;

`
const CheckBoxContainer = styled.div`
    display: flex;
    height: 100%;
    border-left: double .1rem #db7a04;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
`

const Walnut = (props: {image?: string, walnuts: Array<boolean>}) => {
    return <>
        <WalnutContainer>
            <img src={props.image || ReactLogo}/>
            <CheckBoxContainer>
                {props.walnuts.map((walnut, index) => (
                    <CheckBox key={`walnut ${index}`} recieved={walnut}></CheckBox>
                )
                )}
            </CheckBoxContainer>
        </WalnutContainer>
    </>
}

export default Walnut;