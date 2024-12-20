import styled from '@emotion/styled'
import { useState } from 'react'
import checkmark from '../../assets/icons/check.svg'

// Styling for checkbox
const StyledCheckbox = styled.div`
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    border-radius: 32px;
    margin-right: 8px;
    border: solid 2px rgb(34, 34, 34);
    outline: none;
    &.default:hover {
        border-color: ${(props) => props.theme.primaryColor.black[1]};
    }
    &.checked {
        background-color: ${(props) => props.theme.primaryColor.black[1]};
        border: none;
    }
    &.checked:hover {
        background-color: rgb(99, 91, 91);
    }
`
const CheckboxWrapper = styled.div`
    display: flex;
`
/*
 * Checkbox component
 * Display custom label by passing in your text through the label prop
 */
export const Checkbox = (props: any) => {
    const [checked, setChecked] = useState(true)
    return (
        <CheckboxWrapper>
            <StyledCheckbox
                className={checked ? 'default' : 'checked'}
                onClick={() => {
                    setChecked(!checked)
                    props.onClick(checked)
                }}
            >
                <img src={checkmark} />
            </StyledCheckbox>
        </CheckboxWrapper>
    )
}
