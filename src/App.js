import { PublicRoutes } from "./assets/routes/Routes"
import PublicRoute from "./components/main/PublicRoute";
import { Switch } from "react-router-dom"
function App() {
  return (
    <div className="App">

      <Switch>
        {
          PublicRoute.map((item, inde) => {
            return <PublicRoute
              path={item.path}
              component={item.component} />
          })
        }
      </Switch>

    </div>
  );
}

export default App;
