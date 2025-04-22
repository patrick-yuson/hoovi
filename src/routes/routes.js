import Home from './pages/Home';
import StorySubmission from './pages/StorySubmission';
import Gallery from '@/pages/Gallery';
import Stories from '@/pages/Stories';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/story-submission', element: <StorySubmission /> },
  { path: '/gallery', element: <Gallery />},
  { path: '/stories', element: <Stories />}
];

export default routes;
