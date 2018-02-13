import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import Work1 from './Work2';
import ExampleTwoDeepComponent from './ExampleTwoDeepComponent';
import PageNotFound from './PageNotFound';
import s from '../styles/exampleComponent.style';
import { LineChart, Line } from 'recharts';


const data = [
      {name: 'Page A', uv: 3000, pv: 2400, amt: 2200},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2550, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 2800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 4490, pv: 4300, amt: 1100},
];

const ExamplePageText = () => (
  <p style={s.p}>
    <LineChart width={400} height={400} data={data}>
  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
  Hi
  </p>
);

export default function ExampleComponent() {
  return (
    <Switch>
      
      <Route
        exact path="/Work2"
        render={() => (
          <div>
            <ExamplePageText />
            <div style={s.pageLinkContainer}>             
            </div>
          </div>
        )}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
}
