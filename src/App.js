import React from 'react';
import Theme from './ui/theme';
import { ThemeProvider } from 'styled-components';
// import Signin from './views/signin'
import StudentSignin from './views/student-signin/'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <StudentSignin></StudentSignin>
      {/* <Signin></Signin> */}
    </ThemeProvider>
  );
}

export default App;
