import React, { Component } from 'react';
import ErrorBoundary from "../../@shared/ErrorBoundary/ErrorBoundary";
import PageHeader from "../../@shared/PageHeader/PageHeader";
import './HomePage.scss';
import SimpleCard from '../../@shared/SimpleCard';
import FamilyBlock from '../../@shared/FamilyBlock';

class HomePage extends Component {

  render() {
    return (
      <ErrorBoundary>
        <PageHeader />
        <FamilyBlock />
      </ErrorBoundary>
    );
  }
}

export default HomePage;
