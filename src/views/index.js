import React from 'react';
import Loadable from 'react-loadable';
import Loading from '@/components/commons/loading.js';

export const Home = Loadable({
  loader:()=>import( /* webpackChunkName: "home" */  "./Home"),
  loading:Loading
});

export const Detail = Loadable({
  loader:()=>import( /* webpackChunkName: "detail" */  "./Detail"),
  loading:Loading
});

export const Login = Loadable({
  loader:()=>import( /* webpackChunkName: "login" */  "./Login"),
  loading:Loading
});