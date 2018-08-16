import * as React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


interface ICounterProps {
    handleCount: () => void,
    label: string
}

class Counter extends React.Component<ICounterProps, { count: number }> {

    constructor(props: any) {
        super(props);
        this.increaseCount = this.increaseCount.bind(this);

        this.state = {
            count: 0
        }

    }

    public render() {
        // @ts-ignore
        return (
            <div onClick={this.props.handleCount}>
                <FontAwesomeIcon icon={this.props.label === 'plus' ? 'plus' : 'minus'} size="6x"/>
            </div>

        )
    }

    public increaseCount(): void {
        this.setState({count: this.state.count + 1})
    }


}

export default Counter