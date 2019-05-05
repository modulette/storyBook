import React from './node_modules/react';
import { storiesOf } from './node_modules/@storybook/react';
import { FontAwesomeIcon } from './node_modules/@fortawesome/react-fontawesome'
import { ButtonIcon } from './node_modules/react-rainbow-components/components';
import { faSlidersH, faChalkboardTeacher} from './node_modules/@fortawesome/free-solid-svg-icons';
import { faBell} from './node_modules/@fortawesome/free-regular-svg-icons';
import { withKnobs, number } from './node_modules/@storybook/addon-knobs';
import NavbarStyle1 from './style1';
import NavbarStyle2 from './style2';

const space = number('Space', 8, { range: true, min: 0, max: 8, step: 1 });

storiesOf('Components/Navbar', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <NavbarStyle1 spacer={10}>
        </NavbarStyle1>
      ))
  .add('With Right Icons', () => (
      <NavbarStyle1 spacer={space}>
          <ButtonIcon size="medium" icon={<FontAwesomeIcon icon={faSlidersH} />} />
          <ButtonIcon size="medium" icon={<FontAwesomeIcon icon={faChalkboardTeacher} />} />
          <ButtonIcon size="medium" icon={<FontAwesomeIcon icon={faBell} />} />
      </NavbarStyle1>
    ))
    .add('With Back Arrow', () => (
        <NavbarStyle2>
        </NavbarStyle2>
      ))