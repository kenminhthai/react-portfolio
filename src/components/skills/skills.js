import React, { Component } from 'react';

// import resume data
import { skills } from '../../site-data/resume.json';

class Skills extends Component {

    render() {


        let softsHTML = () => {
            let softs = skills.softs;
            return (
                        Object.keys(softs).map( (soft, i) => {
                            return (

                                <div className="row skill-row" key={'skill-' + soft + i}>
                                    <h4>{soft}</h4>

                                    <div className="skill-bar">
                                        <div className="skill-bar__percent"
                                             style={this.props.isMounted ? {
                                                 'transform': 'scaleX('+softs[soft].percent / 100+')',
                                                 'transitionDelay': i*100 +'ms'
                                             } : {}}>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
            )

        };


        let skillsHTML = () => {
            let technos = skills.technos;
            let generalSkills = skills.generalSkills;
            return (
                <div className="cv-block cv-block--skills">
                    <div className="cv-block__title text-center" title="skills">
                        <i className="fa fa-cogs cv-block__icon"></i>
                    </div>
                    <div className="cv-block__content">
                        {
                            Object.keys(technos).map((techno, i) => {
                                return (
                                    <div className="row skill-row" key={'techno-row-' + techno + i} style={{marginLeft: '10px'}}>

                                        <div className="col col--12">
                                            <div className="skill" key={techno}>
                                                <h4>{techno}</h4>
                                                <div className="skill-bar" style={{width: 'calc(100% - 20px)'}}>
                                                    <div className="skill-bar__percent"
                                                         style={this.props.isMounted ? {
                                                             'transform': 'scaleX('+technos[techno].percent / 100+')',
                                                             'transitionDelay': i*100 +'ms'
                                                         } : {}}>
                                                    </div>
                                                </div>
                                                <ul className="skill-list">
                                                    {
                                                        technos[techno].libraries.map((category, i) => {
                                                            return (
                                                                <li className="skill-list__item col col--4 l-sm" key={'techno-category-' + category + i} style={{'verticalAlign': 'top', 'padding': '15px 0 15px 0', 'minHeight': '130px'}}>
                                                                    <h5>{category.name}</h5>
                                                                    <div className="row">
                                                                        {
                                                                            category.logo ? (
                                                                                <div className={`category-logo ${this.props.isMounted ? 'in': ''}`} style={
                                                                                    {
                                                                                        'width': '40px',
                                                                                        'textAlign': 'center',
                                                                                        'verticalAlign': 'middle',
                                                                                        'display': 'inline-block',
                                                                                        'animationDelay': i * 100 + 'ms'
                                                                                    }
                                                                                }>
                                                                                    <img src={category.logo} alt={category.name} style={{'maxWidth': '100%', 'display': 'inline-block'}}/>
                                                                                </div>
                                                                            ) : null
                                                                        }
                                                                        <div className="skill-bar" style={{'display': 'inline-block','width': 'calc(100% - 70px)', 'marginLeft': '10px', 'marginRight': '20px'}}>
                                                                            <div className="skill-bar__percent skill-bar__percent--sub-category"
                                                                                 style={this.props.isMounted ? {
                                                                                     'transform': 'scaleX('+category.percent / 100+')',
                                                                                     'transitionDelay': i*100 +'ms'
                                                                                 } : {}}>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }
                        {
                            Object.keys(generalSkills).map((skill, i) => {
                                return (
                                    <div className="row skill-row" key={'skill-' + skill + i}>
                                        <h4>{skill}</h4>
                                        <div className="skill-bar">
                                            <div className="skill-bar__percent"
                                                 style={this.props.isMounted ? {
                                                     'transform': 'scaleX('+generalSkills[skill].percent / 100+')',
                                                     'transitionDelay': i*100 +'ms'
                                                 } : {}}>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                        <h3 className="text-center" style={{marginTop: 60}}>Softs</h3>
                        {softsHTML()}
                    </div>
                </div>
            );
        };


        return (
            <div className={`${this.constructor.name} ${this.props.isMounted ? 'in' : ''}`}>

                {this.props.hasTitle ?
                    (
                        <div className="section-wrapper__header">
                            <h1 className="title__h1">Resume</h1>
                        </div>
                    ) : null
                }


                <div className="container container--medium-small">

                    {skillsHTML()}

                </div>

            </div>
        );
    }
}

export default Skills;