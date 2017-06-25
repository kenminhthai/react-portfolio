import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class PortfolioListItem extends Component {
    
    constructor() {
        super();
        this.state = {
            displayed: false
        };
        this.handleDisplay = this.handleDisplay.bind(this);
    }

    handleDisplay() {
        setTimeout(()=> {
            this.setState({displayed: true});
        }, 200);

    }

    render() {

        return(
            <div className="col col--4">
                <div className={`portfolio__item ${this.state.displayed ? 'in' : ''}`}>
                    <div className="portfolio__item__inner">
                        <img className="portfolio__item__inner__image"
                             src={this.props.thumbnail} alt="" onLoad={this.handleDisplay}/>
                    </div>
                    <div className="portfolio__item__caption">
                        <h3 className="portfolio__item__caption__title">
                            <Link to={{
                                pathname: this.props.link,
                                query: {
                                    project: this.props.project
                                }
                            }}>
                                {this.props.title}
                            </Link>
                        </h3>
                        <div className="portfolio__item__caption__infos">
                            <div className="text-center">
                                <div className="portfolio__item__caption__infos__date">
                                    {this.props.date}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default PortfolioListItem;