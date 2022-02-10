import React from 'react'
import {BrowserRouter , Route , Routes } from 'react-router-dom'
import { Form } from './component/formulario/form';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Form/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
