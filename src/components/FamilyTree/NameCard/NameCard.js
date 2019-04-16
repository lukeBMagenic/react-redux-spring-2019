import React, { Component } from 'react';
import './NameCard.scss';
import propTypes from 'prop-types'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class NameCard extends Component {
  
    render() {
        return (
            <Card className="card">
                <CardContent>
                    <Typography className="title" gutterBottom>
                        {this.props.name}
                    </Typography>
                    <Typography>
                        Born: {this.props.year}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
  }

  NameCard.propTypes = {
    name: propTypes.string.isRequired,
    year: propTypes.number.isRequired
  };

export default NameCard;