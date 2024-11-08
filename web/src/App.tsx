import { BrowserRouter } from "react-router-dom"
import { Router } from "./routes/Router"
import { UserProvider } from "./contexts/UserContext"
import { TaskProvider } from "./contexts/TasksContext"

function App() {

  return (
    <UserProvider>
      <TaskProvider>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
      </TaskProvider>
    </UserProvider>
  )
}

export default App
