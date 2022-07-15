import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';

const App = () => {
  return(
<BrowserRouter>
    <Routes>   
        <Route index element={<LogIn />} />
        <Route path='/sign-up' element={<SignUp />}></Route>
        <Route path="*" element={<div>404</div>} />
    </Routes>
</BrowserRouter>
  )
}

export default App