import React, { Component } from 'react';
import ErrorBoundary from "../../@shared/ErrorBoundary/ErrorBoundary";
import PageHeader from "../../@shared/PageHeader/PageHeader";
import './HomePage.scss';

class HomePage extends Component {
  render() {
    return (
      <ErrorBoundary>
        <PageHeader />
        <h1>Home Page</h1>
      </ErrorBoundary>
    );
  }
}

export default HomePage;
