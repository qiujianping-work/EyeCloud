import React from 'react';
import { Router, Route ,Link} from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import ProductList from './components/ProductList';

const Page2 = ({ match }) => (
  <div>
    <h2>Page2</h2>
    <ul>
      <li>
        <Link to={`${match.url}/branch1`}>
          branch1
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/branch2`}>
          branch2
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/branch3`}>
          branch3
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:branchId`} component={Branch} />
    <Route exact path={match.url} render={() => (
      <h3>Default Information</h3>
    )} />
  </div>
)

const Branch = ({ match }) => {
  console.log(match);
  return (
    <div>
      <h3>{match.params.branchId}</h3>
    </div>
  )
}

function RouterConfig({ history }) {
  	return (
	    <Router history={history}>
	    	<div>
		      <ul>
		        <li><Link to="/">IndexPage</Link></li>
		        <li><Link to="/Products">Products</Link></li>
		        <li><Link to="/Page2">Page2</Link></li>
		      </ul>

		      <hr/>
		      <div style={{position:'absolute',top:100}}>
			      <Route exact path="/" component={IndexPage}/>
			      <Route path="/Products" component={Products}/>
			      <Route path="/Page2" component={Page2}/>
		      </div>
		    </div>
	    </Router>
  	);
}

export default RouterConfig;
