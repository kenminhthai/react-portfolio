import React from 'react';
import Page from '../templates/page';
import Hero from '../hero/hero';
import site from '../../site-data/site.json';
import Portfolio from '../portfolio/portfolio';
import Helmet from 'react-helmet';


// Portfolio
import portfolio from '../../site-data/portfolio.json';

class Home extends Page {
    
    render() {
        return (
            <div className={`homePageContent ${this.state.isMounted ? 'in': ''}`}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{`${site.title} ${site.title_separator} ${site.subtitle}`}</title>
                </Helmet>
                <Hero title={site.title} subtitle={site.subtitle} theme={this.props.theme}/>
                <div className="Home">
                    <section className="site-description">
                        <div className="site-description__inner">
                            <div className="container container--small">
                                <div className="row">
                                    <div className="site-description__content">
                                        <h3 className="">{site.description_title}</h3>
                                        <p>{site.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Portfolio portfolio={portfolio}
                               itemsLimit={3}
                               theme={this.props.theme}
                               hasLinkButton={true}
                               linkButtonLink="/portfolio"
                               linkButtonLabel="See more Projects"
                               isEmbed={true}/>
                </div>
            </div>
        );
    }
}

export default Home;
