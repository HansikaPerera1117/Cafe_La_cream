import 'semantic-ui-css/semantic.min.css'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss'

import store from "./redux/storeConfig/store"
import {Provider} from 'react-redux'

import Start from './views/start/Start';
import  SignUp  from './views/signUp/SignUp';
import Login from './views/loging/Login';
import  LogoLaCream from './assets/images/Logo.png'
import NavBar from './components/navBar/NavBar';
import PageMain from './views/pageMain/PageMain';
import PageProducts from './views/pageProducts/PageProducts';
import RouterHandler from './router/RouterHandler';


function App() {

  return (
   
      <div className="App container-flud">
        <head>
          <title>Cafe La Cream</title>
          <link rel='icon' href='./assets/images/Logo.png' />

          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Arima&family=Belleza&family=Buda:wght@300&family=Inter:wght@500;700&family=Marko+One&family=Merienda&family=Nunito+Sans&family=Oooh+Baby&family=Over+the+Rainbow&family=Overlock+SC&family=Sue+Ellen+Francisco&family=Ubuntu&display=swap" rel="stylesheet"/>
          
          </head>
        
          <Provider store={store}>
            <RouterHandler/>
          </Provider>
       

      
      </div>
    
  );
}

export default App;
