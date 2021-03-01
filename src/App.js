import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import HomePage from './features/HomePage';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
// import productApi from './api/productApi';

function App() {
    useEffect(() => {
        const fetchProduct = async () => {
            // const params = { _limit: 10 }
            // const productList = await productApi.getAll(params);
            // console.log('Product List', productList);
        };

        fetchProduct();
    }, []);

    return (
        <div className="App">
            <header>Header</header>
            <hr />
            <nav>
                <NavLink to="/" activeClassName="active-page">
                    Home
                </NavLink>
                &nbsp;
                <NavLink to="/todos" activeClassName="active-page">
                    Todo List
                </NavLink>
                &nbsp;
                <NavLink to="/album" activeClassName="active-page">
                    Album List
                </NavLink>
            </nav>
            <hr />
            <Switch>
                <Redirect from="/home" to="/" exact />
                <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

                <Route path="/" component={HomePage} exact />
                <Route path="/todos" component={TodoFeature} />
                <Route path="/album" component={AlbumFeature} />
            </Switch>
            <hr />
            <footer>Footer</footer>
        </div>
    );
}

export default App;
