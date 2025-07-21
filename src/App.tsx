import { BrowserRouter } from 'react-router-dom'
// import Counter from './features/counter/counter'
import AppRouter from './router'
import './index.css'
const App = () => {
  return (
    <div>
      {/* <Counter/> */}
      <BrowserRouter>
      <AppRouter/>
      </BrowserRouter>
    </div>
  )
}

export default App
