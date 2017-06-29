import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Helmet from 'react-helmet';
// Site data
import site from '../../site-data/site.json';

// Portfolio data
import portfolio from '../../site-data/portfolio.json';

class PortfolioProject extends Component {
    constructor(props) {
        super();
        this.state = {
            isMounted: false,
            imgLoaded: false
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        document.body.setAttribute('data-page-type',this.constructor.name);
        setTimeout(() => {
            this.setState({isMounted: true});
        }, 200);
    }

    getProject(projectSlug) {
        const slug = projectSlug.toString();
        const project = portfolio.projects.filter((project)=>{
            if(project.slug === slug) {
        
                return project;
            } else {
                return null;
            }
        });

        return project[0];
    }

    getNextProject(projectSlug) {
        const slug = projectSlug.toString();
        const nextProj = [];
        portfolio.projects.filter((project, index)=> {
            if(project.slug === slug) {
                let next = portfolio.projects[index + 1] ? portfolio.projects[index + 1] : portfolio.projects[0];
                nextProj.push(next);
            } else {
                return null;
            }
        });

        return nextProj[0];
    }

    getPreviousProject(projectSlug) {
        const slug = projectSlug.toString();
        const prevProj = [];
        portfolio.projects.filter((project, index)=> {
            if(project.slug === slug) {
                let prev = portfolio.projects[index - 1] ? portfolio.projects[index - 1] : portfolio.projects[portfolio.projects.length -1];
                prevProj.push(prev);
            } else {
                return null;
            }
        });

        return prevProj[0];
    }


    handleImagesLoaded(event) {
      //console.log(event.target);
        this.setState({
            imgLoaded: true
        });
    }
     
    addLike() {
        this.setState({number_of_likes: this.state.number_of_likes + 1});
    }

    render() {
        
        const project = this.getProject(this.props.currentProjectSlug);
        const nextItemLink = this.getNextProject(this.props.currentProjectSlug).slug;
        const previousItemLink = this.getPreviousProject(this.props.currentProjectSlug).slug;
        const nextItemTitle = this.getNextProject(this.props.currentProjectSlug).title;
        const previousItemTitle = this.getPreviousProject(this.props.currentProjectSlug).title;
        const nextItemThumb = this.getNextProject(this.props.currentProjectSlug).images.featured_small;
        const previousItemThumb = this.getPreviousProject(this.props.currentProjectSlug).images.featured_small;

        return (
            <div className={`portfolio__project__wrapper section-wrapper margin-top-0 Portfolio-project ${this.state.isMounted ? 'in' : ''}`}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{`${project.title} ${site.title_separator} ${site.title} ${site.title_separator} ${site.subtitle}`}</title>
                </Helmet>
                <div className="section-wrapper__inner">

                    <article className="portfolio__project__wrapper__project">
                        <a href="/portfolio" title="portfolio" className="back-to-portfolio-link--close-project" role="button" tabIndex={0}>
                            <i className="fa fa-th"></i>
                        </a>

                        <div className="container container--full-width">
                            <div className="row">
                                <div className="col col--12">
                                    <div className="project__featured-image-wrapper">
                                        <div className="imageLoading"
                                        style={{
                                            'display': this.state.imgLoaded ? 'none' : 'block'
                                        }}>
                                            <div className="loader">

                                            </div>
                                        </div>
                                        <img className="project__featured-image"
                                             onLoad={this.handleImagesLoaded.bind(this)}
                                             src={project.images.featured_big}
                                             alt=""
                                            style={{
                                                'opacity': this.state.imgLoaded ? 1 : 0,
                                                'transform': this.state.imgLoaded ? 'scale(1)' : 'scale(1.1)'
                                            }}/>
                                        <Link className="project-nav__link project-nav__link--prev"
                                           title={previousItemTitle}
                                           to={previousItemLink}
                                           style={{
                                               'display': this.state.imgLoaded ? 'block' : 'none'
                                           }}>
                                            <span className="sr-only">Go to previous project {previousItemTitle}</span>
                                            <span className="fa fa-angle-left project-nav__link__icon"></span>
                                            <h3 className="project-nav__link__title">{previousItemTitle}</h3>
                                            <div className="project-nav__link__thumb">
                                                <img src={previousItemThumb}
                                                     alt={previousItemThumb + 'image miniature'}
                                                     width="100px"
                                                     height="100px"/>
                                            </div>
                                        </Link>
                                        <Link className="project-nav__link project-nav__link--next"
                                           title={nextItemTitle}
                                           to={nextItemLink}
                                           style={{
                                               'display': this.state.imgLoaded ? 'block' : 'none'
                                           }}>
                                            <span className="fa fa-angle-right project-nav__link__icon"></span>
                                            <h3 className="project-nav__link__title">{nextItemTitle}</h3>
                                            <span className="sr-only">Go to next project : {nextItemTitle}</span>
                                            <div className="project-nav__link__thumb">
                                                <img src={nextItemThumb}
                                                     alt={nextItemTitle + 'image miniature'}
                                                     width="100px"
                                                     height="100px"/>
                                            </div>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    <div className="portfolio__project__description__group">
                        <div className="container container--medium-small">
                            <div className="row">
                                <div className="">
                                    <div className="portfolio__project__description-block">
                                        <div className="portfolio__project__description-block__title">
                                            <h1 className="portfolio__project__description-block__title__title--main">
                                                {project.title}
                                            </h1>
                                            <div className="ppdb__date text-center">
                                                {project.date}
                                            </div>
                                            <div className="small categories">
                                                {
                                                        project.categories.map((cat, index)=>{
                                                        return (<span className="cat-name" key={index}>{cat}</span>)
                                                        
                                                        })
                                                }
                                            </div>
                                        </div>
                                        <div className="portfolio__project__description-block__content">
                                            <div className="row">
                                                <div className="col col--8">
                                                    <div className="block">
                                                        <p className="portfolio__project__description-block__content__description text-left">
                                                            {project.description}
                                                        </p>
                                                    </div>

                                                </div>
                                                <div className="col col--4">
                                                    <div className="block">
                                                        <div className="portfolio__project__description-block__content">
                                                            <ul className="portfolio__project__description-block__content__tech-list">
                                                                {
                                                                    project.technologies.map((tech, index)=>{
                                                                        return (<li className="portfolio__project__description-block__content__tech-list__item" key={index}>{tech}</li>)

                                                                    })
                                                                }
                                                            </ul>
                                                        </div>
                                                        {
                                                            project.link ? (
                                                                <div>
                                                                    <a href={project.link}
                                                                       title={project.title}
                                                                       target="_blank"
                                                                       className="btn btn--project-link">
                                                                        Visit Website
                                                                        &nbsp;
                                                                        <span className="fa fa-caret-right"></span>
                                                                    </a>
                                                                </div>
                                                            ) : ''

                                                        }
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="container container--full-width">
                            <div className="row">
                                {
                                    project.images.project_images.map((image, index)=> {
                                        return (
                                            <div className="portfolio__project__image-block" key={index}>
                                                <img src={image} alt=""  style={
                                                    {
                                                        opacity: this.state.imgLoaded ? 1 : 0,
                                                        transition: 'all 700ms ease',
                                                        transitionDelay: `${index * 200 }ms`
                                                    }
                                                }/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </article>
                </div>

            </div>
        )
    }

}

export default PortfolioProject;