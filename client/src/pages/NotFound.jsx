import React from 'react'
//import pagenotfound image
import pagenotfoundImage from "../assets/pagenotfound.jpg";
//react router dom
import { BrowserRouter as Router, Route, Switch,Link,Redirect } from 'react-router-dom';




const PageNotFound = () => {
    return (
        <Router>
            <Switch>


                <div className="pageNotFound">

                    <h1>Oops..! 404 Page Not Found</h1>
                    <p>Looks like you came to wrong page on our server</p>
                    <img src={pagenotfoundImage} height="500" width="500" alt="not found" />
                </div>
            </Switch>

        </Router>
    )
}

export default PageNotFound;