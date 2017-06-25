import React, {Component} from 'react';

class Hero extends Component {


    render() {

        return (
            <div className="hero">
                <div className="hero__inner">

                    <hgroup className="hero__inner__title__group">
                        <h1 className="hero__inner__title__group__title">{this.props.title}</h1>
                        <h2 className="hero__inner__title__group__subtitle">{this.props.subtitle}</h2>
                    </hgroup>
                </div>
            </div>
        )
    }

}

export default Hero;