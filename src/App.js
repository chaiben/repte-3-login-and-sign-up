import { HashRouter, Route, Routes} from 'react-router-dom';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import './App.css'

const App = () => {
  return(
<HashRouter>
    <Routes>   
        <Route index element={<LogIn />} />
        <Route path='/sign-up' element={<SignUp />}></Route>
        <Route path="*" element={<LogIn />} />
    </Routes>
</HashRouter>
  )
}

export default App