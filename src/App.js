// import logo from './logo.svg';
import './App.css';
import Pages from './pages'
import ErrorBoundary from './ErrorBoundary'
// import {gql, useQuery} from '@apollo/client'
import {BrowserRouter} from 'react-router-dom'


// const GET_USERS = gql`
// query Users{
//   users{
//     id
//     username
//   }
// }
// `


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;

