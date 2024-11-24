import { Provider } from 'react-redux';
import Body from './Components/Body'
import AppStore from './utils/AppStore';

const Netflix  = ()=>{
  // using provider is working to all the components we provide its inside props to use our store overall body
  return(
    <>
    
  <Provider store = {AppStore}>
    <Body/>
    </Provider>
    </>
  )
}
export default Netflix ;