import React from 'react';
import Page from '../templates/page';

class NotFound extends Page {
    render() {
        return (
            <div className={`section-wrapper Portfolio ${this.state.isMounted ? 'in' : ''}`}>
                <div className="NotFound section-wrapper__header">
                    <h1 className="title__h1">Not Found !</h1>
                    <div className="section-wrapper__header__subtitle text-center">Sorry, there is nothing here. Return to the&nbsp;
                        <a href="/">homepage</a> ?</div>
                </div>
            </div>

        );
    }
}

export default NotFound;
