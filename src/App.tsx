import * as React from 'react';
import './App.css';
import Counter from './components/counter'
import {Col, Row} from 'reactstrap';
import Tally from './components/tally/tally'
import {library} from '@fortawesome/fontawesome-svg-core';
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';


library.add(faPlus, faMinus);


interface IAppState {
    count: number
}

class App extends React.Component<any, IAppState> {

    constructor(props: any) {
        super(props);

        this.incCount = this.incCount.bind(this);
        this.decCount = this.decCount.bind(this);


        this.state = {
            count: 0
        }
    }

    public render() {
        return (
            <Row className="app-container">
                <Col xs="5">
                    <h1 className="title">Ultimate Counter</h1>
                </Col>
                <Col xs={{size: 6, offset: 1}} className="counter-container">
                    <div className="counter-number">
                        <div className="box">
                            <Tally count={this.state.count}/>
                        </div>
                    </div>
                    <div className="counter-buttons">
                        <Counter label="plus" handleCount={this.incCount}/>
                        <Counter label="minus" handleCount={this.decCount}/>
                    </div>

                </Col>

            </Row>
        );
    }

    public incCount() {
        const value = Math.min(30, this.state.count + 1);

        this.setState({count: value})
    }

    public decCount() {
        const value = Math.max(0, this.state.count - 1);

        this.setState({count: value})
    }
}

export default App; 
