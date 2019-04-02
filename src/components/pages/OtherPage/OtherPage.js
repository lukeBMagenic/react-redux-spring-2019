import React, { Component } from 'react';
import ErrorBoundary from "../../@shared/ErrorBoundary/ErrorBoundary";
import PageHeader from "../../@shared/PageHeader/PageHeader";
import './OtherPage.scss';

class OtherPage extends Component {
  render() {
    return (
      <ErrorBoundary>
        <PageHeader />
        <h1>Other Page</h1>
      </ErrorBoundary>
    );
  }
}

export default OtherPage;
