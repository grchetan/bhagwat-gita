
import type { RouteObject } from "react-router-dom";

import Layout from '../components/layout/Layout';
import HomePage from '../pages/home/HomePage';
import ChapterPage from '../pages/chapter/ChapterPage';
import ChaptersPage from '../pages/chapters/ChaptersPage';
import AboutPage from '../pages/about/AboutPage';
import ContactPage from '../pages/contact/ContactPage';
import NotFound from '../pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'chapters',
        element: <ChaptersPage />
      },
      {
        path: 'chapter/:chapterNumber',
        element: <ChapterPage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
];

export default routes;
