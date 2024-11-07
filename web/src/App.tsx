import { BrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home"
import { Router } from "./routes/Router"

function App() {

  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  )
}

export default App
