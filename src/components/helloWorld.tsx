import * as React from 'react';

interface IHellowWorldProp {
    message: string
}

class HelloWorld extends React.Component<IHellowWorldProp, any> {
    public render() {
        return (
            <div>{this.props.message}</div>
        );
    }
}

export default HelloWorld