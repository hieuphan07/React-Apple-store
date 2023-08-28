import { useRouteError } from 'react-router-dom';

import React from 'react'

import PageContent from '../components/PageContent';
import NavBar from '../MainNavigation/NavBar'

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'An error occured!';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource of page.'
  }

  return (
    <>
      <NavBar />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  )
}

export default ErrorPage;