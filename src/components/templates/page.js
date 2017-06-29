import { Component } from 'react';

class Page extends Component {
    constructor() {
        super();
        this.state = {
            isMounted: false
        }
    }

    componentDidMount() {
        document.body.setAttribute('data-page-type',this.constructor.name);
        window.scrollTo(0, 0);
        setTimeout(() => {
            this.setState({isMounted: true});
        }, 200);
    }
}

export default Page;