import React from 'react';
import Page from '../templates/page';
import PortfolioListItem from '../portfolio-list-item/portfolioListItem';
import PortfolioFilterListItem from '../portfolio-filter-list-item';
import {Helmet} from 'react-helmet';
import site from '../../site-data/site.json';

class Portfolio extends Page {

    constructor(props) {
        super();
        this.state = {
            isMounted: false,
            portfolio: props.portfolio,
            projects: props.portfolio.projects
        };
        this.filterPortfolio = this.filterPortfolio.bind(this);
    }

    componentDidMount() {
        if ( !this.props.isEmbed ) {
            document.body.setAttribute('data-page-type', 'Portfolio');
        }
        window.scrollTo(0, 0);
        setTimeout(() => {
            this.setState({isMounted: true});
        }, 200);

    }


    filterPortfolio(e) {
       let catName = e;
       let projects = [];
       this.props.portfolio.projects.map((project) => {
          project.categories.filter(cat => {
              if (cat === catName) {
                  projects.push(project);
              }
          });
       });

       if(catName === 'All') {
            this.setState({projects: this.props.portfolio.projects});
       } else {
            this.setState({projects});
       }
    }

    render() {
        let portfolio = this.state.portfolio;
        let categories = portfolio.categories;

        let cats = categories.map((cat, i)=> {
                return (
                    <PortfolioFilterListItem key={`PortfolioFilterListItem-${i}`} cat={cat} handleClick={this.filterPortfolio} />
                )
        });
    
        let portfolioItems = this.state.projects.map((project, index) => {

            let nextProject = this.state.projects[index+1] && this.state.projects[index+1] !== 'undefined' ? this.state.projects[index+1].slug : this.state.projects[0].slug;
            let prevProject = this.state.projects[index-1] && this.state.projects[index-1] !== 'undefined' ? this.state.projects[index-1].slug : this.state.projects[this.state.projects.length - 1].slug ;


            if(index < this.props.itemsLimit) {
                return (
                        <PortfolioListItem key={Date.now()+ index}
                        thumbnail={project.images.featured_small}
                        thumbnailForIe={project.images.featured_small_ie}
                        link={`/portfolio/${project.slug}`}
                        nextItemLink={`/portfolio/${nextProject.slug}`}
                        previousItemLink={`/portfolio/${prevProject.slug}`}
                        title={project.title}
                        project={project}
                        projects={this.state.projects}
                        date={project.date}/>
                )
            } else {
                return null;
            }

        });

        return (

            <div className={`section-wrapper Portfolio ${this.state.isMounted ? 'in' : ''}`}>
                {!this.props.isEmbed && (
                        <Helmet>
                            <meta charSet="utf-8" />
                            <title>{`Portfolio ${site.title_separator} ${site.title} ${site.title_separator} ${site.subtitle}`}</title>
                        </Helmet>
                    )
                }
                <div className="section-wrapper__header">
                    <h1 className="title__h1">{portfolio.title}</h1>
                    <p className="section-wrapper__header__subtitle">{portfolio.description}</p>
                </div>
                {
                    this.props.displayFilters ? (
                        <div className="portfolio__filter">
                            <ul className="portfolio__filter__list">
                                <li className="portfolio__filter__list__item">
                                    <a href="#" onClick={(event)=> {
                                            event.preventDefault();
                                            this.filterPortfolio('All')
                                            return false;
                                            }
                                        }>All
                                    </a>
                                </li>
                                {cats}
                            </ul>
                        </div>
                    ) : null
                }


                <section className="section section__gallery">
                    <div className="portfolio__items-list container container--full-width container--large-limited">
                        <div className="row">
                            {portfolioItems}
                        </div>
                    </div>
                    {
                        this.props.hasLinkButton ? (
                            <div className="text-center">
                                <a href={this.props.linkButtonLink} className="btn portfolio__big-btn">
                                    {this.props.linkButtonLabel}
                                </a>
                            </div>

                        ) : null
                    }
                </section>

            </div>
        );
    }
}

export default Portfolio;
