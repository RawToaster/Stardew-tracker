import styled from "styled-components"
import stardewCheck from "../assets/stardewCheck.svg"

const CheckBoxBorder = styled.div`
    border: solid 0.2rem;
    border-color: #5a2d2a;
    height: 2rem;
    width: 2rem;
    background-color: #fdc075;
`

const CheckBox = (props: {recieved: boolean}) => {
    return <>
        <CheckBoxBorder>
            {props.recieved && <img src={stardewCheck} width={30} height={30}></img>}
        </CheckBoxBorder>
    </>
}

export default CheckBox