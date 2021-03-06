import { Link } from 'react-router-dom';
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom';

function Topics() {
let match = useRouteMatch();
return (
    <div>
    <h2>Topics</h2>
    <ul>
        <li>
        <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
    </ul>

    <Switch>
        <Route path={`${match.path}/:topicId`}>
        <Topic />
        </Route>
        <Route path={match.path}>
        <h3>Please select a topic {match.path}</h3>
        </Route>
    </Switch>
    </div>
)
}

type TopicParams = {
    topicId: string;
};

function Topic() {
    let { topicId } = useParams<TopicParams>();
    return <h3>Requested topic ID: {topicId}</h3>
}

export default Topics