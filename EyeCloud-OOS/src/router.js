import React from 'react';
import { Router, Route ,Link} from 'dva/router';
import LoginPage from './routes/LoginPage';
import ManagePage from './routes/ManagePage';
import IndexPage from './routes/IndexPage';

function RouterConfig({ history }) {
  	return (
	    <Router history={history}>
        <div>
          <Route exact path="/" component={LoginPage}/>
          <Route exact path="/ManagePage" component={ManagePage}/>
          <Route exact path="/IndexPage" component={IndexPage}/>
        </div>
	    </Router>
  	);
}

export default RouterConfig;
