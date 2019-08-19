import React, { Component } from 'react';
import {
    Card, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody, ButtonGroup, Container, Row, Col
} from 'reactstrap'
import Button from '../button/Button';
import './Cards.scss';
import { BrowserRouter as Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            double: false,
        }
    }

    doubleClick = (e) => {
        this.setState({
            double: true,
        })
    }

    render() {
        if (this.state.double)
            return <Redirect push to="/planner"/>
        return (
            <Col xs="2">
                    <Card className="planCard" body style={{ backgroundColor: '#F5DEB3', borderColor: '#F5DEB3' }} onDoubleClick={this.doubleClick}>
                        <CardBody >
                            <CardTitle tag="h3">{this.props.info.name}</CardTitle>
                            <CardText>{this.props.info.text}</CardText>
                            <ButtonGroup style={{ marginTop: "2em", marginBottom: "none" }}>
                                <Button type="icon" icon="download" tooltip="Export Plan" direction="bottom" />
                                <Button type="icon" icon="trash-alt" tooltip="Delete" direction="bottom" />
                                <Button type="icon" icon="sliders-h" tooltip="Plan Settings" direction="bottom" />
                            </ButtonGroup>
                        </CardBody>
                    </Card>

            </Col>
        )
    }
}

export default Cards;