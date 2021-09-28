/*
Copyright 2021 RWTH Aachen University
*/

import React from 'react';
import Loadable from 'react-loadable'

import Layout from './containers/Layout';

function Loading() {
  return <div>Loading...</div>;
}


const SingleProduct = Loadable({
  loader: () => import('./views/SingleProduct/view'),
  loading: Loading,
});
const Home = Loadable({
  loader: () => import('./views/Home/view'),
  loading: Loading,
});



// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'AI-PQ-RCA', component: Layout },
  { path: '/home', exact: true, name: 'Home', component: Home },
  { path: '/single-product', name: 'Single Product', component: SingleProduct }
];

export default routes;
