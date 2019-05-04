import styled from 'styled-components';
import {Button} from 'react-rainbow-components/components';


const ModuletteButton = styled(Button).attrs(({ mainColor, textColor }) => ({
  mainColor: mainColor || "initial",
  textColor: textColor || "initial"
}))`
  box-shadow: ${props => props.glow ? "0 2px 6px 1px "+props.theme[props.mainColor] : "0"}; 
  margin-bottom:  ${props => props.glow ? "5px": "0"};
  background-color: ${props => props.theme[props.mainColor]};
  border-color: ${props => props.theme[props.mainColor]};
  color: ${props => props.theme[props.textColor]};
  font-weight: 500;
  border-radius: 22px;
  padding: 5px 0px;
  width: ${props => props.width};
  :hover, :active, :focus {
    color: ${props => props.theme[props.textColor]};
  }
`;

export default ModuletteButton