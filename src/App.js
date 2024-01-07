import { BrowserRouter, Route, Switch } from "react-router-dom"
import Svc from "./components/svc"
import BedRoomDesigns from "./components/bedroom"
import LivingRoomDesigns from "./components/livingroom"
import KitchenRoomDesigns from "./components/kitchen"
import WashRoomDesigns from "./components/washroom"

const App = () =>{

  return(
    <BrowserRouter>
      <Switch>
          <Route exact path = "/" component = {Svc}/>
          <Route exact path = "/bedroom-designs" component = {BedRoomDesigns}/>
          <Route exact path = "/livingroom-designs" component = {LivingRoomDesigns}/>
          <Route exact path = "/kitchenroom-designs" component = {KitchenRoomDesigns}/>
          <Route exact path = "/washroom-designs" component = {WashRoomDesigns}/>
      </Switch>
    </BrowserRouter>
  )
  
}
export default App