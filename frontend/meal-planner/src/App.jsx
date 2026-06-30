import RecipePage from "../pages/RecipePage.jsx"

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/recipe">Recipe</Link>

        </nav>

        <Routes>
          <Route path="/recipe" element={<RecipePage />}></Route>

        </Routes>


      </BrowserRouter>
    </>
  );
}

export default App
