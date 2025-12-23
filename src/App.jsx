import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import { Router } from "react-router-dom"

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>

  )
}

export default App