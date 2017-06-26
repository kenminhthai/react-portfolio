import React from 'react';
import Page from '../templates/page';
import Skills from '../skills/skills';
import Helmet from 'react-helmet';
// Site data
import site from '../../site-data/site.json';

// CV Data
import { intro, info, address } from '../../site-data/resume.json';

class About extends Page {

    componentDidMount() {
        document.body.setAttribute('data-page-type', 'About');
    }

    render() {

        let resumeTitleBlockHTML = () => {
            return (
                <div className="cv-block cv-block--name-and-title text-center">
                    <div className="cv-block__title">
                        <i className="fa fa-user cv-block__icon" />
                        <h2 className="cv__name">{info.firstname}&nbsp; {info.lastname}</h2>
                        <h4 className="cv__profession">{info.profession.length > 1 ? info.profession.map(prof => {return (<div className="profession" key={`prof-${prof}`}>{prof}</div>)}) : info.profession[0]}</h4>
                    </div>
                    {
                        address.email.length && (
                            <div className="cv-block__email">
                                <span className="fa fa-at" />
                                &nbsp;{address.email}
                            </div>
                        )
                    }
                </div>
            )
        };

        let addressHTML = () => {
            return (
                <div className="cv-block cv-block--address text-center">
                    <div className="cv-block__title">
                        <i className="fa fa-envelope cv-block__icon"></i>

                    </div>
                    <div className="cv-block__content">
                        <div className="address-part address-part__street">
                            {address.street}
                        </div>
                        <div className="address-part address-part__city">
                            <strong>{address.city}</strong>,&nbsp;{address.province}
                        </div>
                        <div className="address-part address-part__country">
                            {address.country}
                        </div>
                        <div className="address-part address-part__ZIP">
                            {address.ZIP}
                        </div>

                        {
                            address.phone.length && (
                                <div className="address-part address-part__phone">
                                    <span className="fa fa-phone" />
                                    &nbsp;{address.phone}
                                </div>
                            )
                        }


                    </div>
                </div>
            )
        };


        return (
            <div className={`section-wrapper About ${this.state.isMounted ? 'in' : ''}`} style={{'padding': 0}}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{`About ${site.title_separator} ${site.title} ${site.title_separator} ${site.subtitle}`}</title>
                </Helmet>
                <div className="section-wrapper__header">
                    <h1 className="title__h1">About</h1>
                    <p className="section-wrapper__header__subtitle">{intro.subtitle}</p>
                </div>

                <div className="about__content">
                    <div className="row about__content__row">
                        <div className="about__content__left col col--6 bg-dark">
                                <div className="container container--small">
                                    <div className="about__image">
                                        <img src="http://via.placeholder.com/150x150" alt="Me"/>
                                    </div>
                                    <div className="about__text text-center">
                                        <p>
                                            {intro.text}
                                        </p>
                                    </div>

                                    <div className="social-links">
                                        <ul>
                                            <li><a href="https://ca.linkedin.com/in/simon-patrat-07260a110" target="_blank"><i className="fa fa-linkedin" /></a></li>
                                            <li><a href="mailto:simon.patrat@gmail.com"><i className="fa fa-envelope"/></a></li>
                                            <li><a href="https://www.behance.net/Spatrat" target="_blank"><i className="fa fa-behance"/></a></li>
                                            <li><a href="https://github.com/simonpatrat" target="_blank"><i className="fa fa-github"/></a></li>
                                            <li><a href="http://codepen.io/simonpatrat/" target="_blank"><i className="fa fa-codepen"/></a></li>
                                        </ul>
                                    </div>
                                    <div className="personal-info">
                                        <div className="row">
                                            <div className="col col--6">
                                                {resumeTitleBlockHTML()}

                                            </div>
                                            <div className="col col--6">
                                                {addressHTML()}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        <div className="about__content__right col col--6">
                            <div className="about-skills-wrapper">
                                <Skills isMounted={this.state.isMounted}/>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default About;
