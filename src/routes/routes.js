import Home from './pages/Home';
import StorySubmission from './pages/StorySubmission';
import Login from './pages/Login';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/story-submission', element: <StorySubmission /> },
  { path: '/login', element: <Login />},
];

export default routes;
