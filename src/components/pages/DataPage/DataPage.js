import React, { Component } from 'react';
import ErrorBoundary from "../../@shared/ErrorBoundary/ErrorBoundary";
import PageHeader from "../../@shared/PageHeader/PageHeader";
import './DataPage.scss';

class DataPage extends Component {
  render() {
    return (
      <ErrorBoundary>
        <PageHeader />
        <h1>Data Page</h1>
      </ErrorBoundary>
    );
  }
}

export default DataPage;
