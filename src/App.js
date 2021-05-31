import { makeStyles } from '@material-ui/core';
import Footer from 'components/Footer';
import NotFound from 'components/NotFound';
import ProductFeature from 'features/Product';
import { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AlbumFeature from './features/Album';
import HomePage from './features/HomePage';
import TodoFeature from './features/Todo';
// import productApi from './api/productApi';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
    },
    header: {},
    content: {
        flexGrow: 1
    },
    footer: {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        textAlign: 'center'
    }
}));

function App() {
    const classes = useStyles();

    useEffect(() => {
        const fetchProduct = async () => {
            // const params = { _limit: 10 }
            // const productList = await productApi.getAll(params);
            // console.log('Product List', productList);
        };

        fetchProduct();
    }, []);


    return (
        <div className={classes.root}>
            <Header classname={classes.header} />
            <div className={classes.content}>
                <Switch>
                    <Redirect from="/home" to="/" exact />
                    <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

                    <Route path="/" component={HomePage} exact />
                    <Route path="/todos" component={TodoFeature} />
                    <Route path="/albums" component={AlbumFeature} />
                    <Route path="/products" component={ProductFeature} />

                    <Route component={NotFound} />
                </Switch>
            </div>
            <Footer classname={classes.footer}/>
        </div>
    );
}

export default App;
