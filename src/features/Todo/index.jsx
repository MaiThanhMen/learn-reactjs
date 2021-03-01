import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

function TodoFeature() {
    const match = useRouteMatch();
    // console.log('####',match.path);

    return (
        <div className="App">
            <Switch>
                <Route path={match.path} component={ListPage} exact/>
                <Route path={`${match.path}/:todoId`} component={DetailPage}/>
            </Switch>
        </div>
    );
}

export default TodoFeature;