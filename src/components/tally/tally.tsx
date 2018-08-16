import * as React from 'react';
import './tally.css';

interface ITallyProp {
    count: number
}


class Tally extends React.Component<ITallyProp, any> {
    constructor(props: any) {
        super(props);
    }

    public getCountArray() {
        const tempArray = [];

        for (let i = 0; i < this.props.count; i++) {
            tempArray.push(i);
        }

        return tempArray
    }

    public render() {
        return (
            <ol id="count">&nbsp;
                {this.getCountArray().map(c => {
                    return <li key={c}/>;
                })}
            </ol>

        )
    }
}

export default Tally