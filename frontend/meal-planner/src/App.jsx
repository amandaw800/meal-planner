import RecipeBook from "../pages/RecipeBook.jsx"

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/recipe-books">Recipe Book</Link>

        </nav>

        <Routes>
          <Route path="/recipe-books" element={<RecipeBook />}></Route>

        </Routes>


      </BrowserRouter>
    </>
  );
}

export default App
