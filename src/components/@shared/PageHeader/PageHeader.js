import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";

import { pageType } from "../../../constants/PageType";
import { findPage } from "./PageHeaderDomain";

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit
  },
  icon: {}
});

class PageHeader extends Component {
  render(){
    const treeIcon = '${this.props.classes.icon} fab fas fa-tree';
    const dataIcon = '${this.props.classes.icon} fab fas fa-database';

    return (
      <Fragment>
        <Fab
          id="family-tree-button"
          color="primary"
          className={this.props.classes.fab}
          onClick={() => {
            this.props.history.push(findPage(pageType.FamilyTree));
          }}
        >
          <Icon className={treeIcon} />
        </Fab>
        <Fab
          id="data-button"
          color="primary"
          className={this.props.classes.fab}
          onClick={() => {
            this.props.history.push(findPage(pageType.Data));
          }}
        >
          <Icon className={dataIcon} />
        </Fab>
      </Fragment>
    );
  }
}

PageHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(PageHeader));