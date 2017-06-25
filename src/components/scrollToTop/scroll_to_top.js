import React, {Component} from 'react';

class ScrollToTop extends Component {

    goToTop = () => {
        window.scrollTo(0,0);
    };

    render() {
        return (
            <button type="button" className="scroll-to-top" title="Go to top" onClick={this.goToTop}>
                <i className="fa fa-long-arrow-up"></i>
            </button>
        )
    }

};

export default ScrollToTop;