import React, { Component } from 'react';
import './SimpleCard.scss';
import propTypes from 'prop-types'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class SimpleCard extends Component {
  
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

  SimpleCard.propTypes = {
    name: propTypes.string.isRequired,
    year: propTypes.number.isRequired
  };

export default SimpleCard;