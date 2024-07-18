import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage";

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/"> 
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    )
}