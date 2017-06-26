import { Component } from 'react';

class Page extends Component {
    constructor() {
        super();
        this.state = {
            isMounted: false
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        setTimeout(() => {
            this.setState({isMounted: true});
        }, 200);
    }
}

export default Page;