import styled from 'styled-components';
import { Input } from 'react-rainbow-components/components';

const StyledInput = styled(Input)`
    margin-bottom: 18px;
    label {
        color: ${props => props.theme.inputLabelFocus};
        align-self: start;
        text-transform: uppercase;
        font-weight: 500;
    }
    input  {
        border-color: ${props => props.theme.inputBorder};
        background-color: ${props => props.theme.inputColor};
        color: ${props => props.theme.darkText};
        width: ${props => props.width ?  props.width : '100%'};
        &:hover, :active, :focus {
            box-shadow: unset;
            border: 1px solid ${props => props.theme.inputBorderFocus};
          }
    }
`;

export default StyledInput
