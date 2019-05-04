import React from 'react';
import Theme from './Ui/Theme';
import { ThemeProvider } from 'styled-components';
import Signin from './Views/Signin'
import StudentSignin from './Views/StudentSignin'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      {/* <StudentSignin></StudentSignin> */}
      <Signin></Signin>
    </ThemeProvider>
  );
}

export default App;
