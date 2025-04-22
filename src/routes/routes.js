import Home from './pages/Home';
import StorySubmission from './pages/StorySubmission';
import Login from './pages/Login';
import Gallery from '@/pages/Gallery';
import Stories from '@/pages/Stories';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/story-submission', element: <StorySubmission /> },
  { path: '/login', element: <Login />},
  { path: '/gallery', element: <Gallery />},
  { path: '/stories', element: <Stories />}
];

export default routes;
