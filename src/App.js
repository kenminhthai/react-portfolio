import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';



// Pages Components
import Home from './components/home/home';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import PortfolioProject from './components/portfolio-project/portfolioProject';
import Navigation from './components/navigation/navigation';
import NotFound from './components/not-found/notFound';
import Footer from './components/footer/footer';


// DATAS

// Portfolio
import portfolio from './site-data/portfolio.json';

// Images
import logo from './logo.svg';


import './App.css';


class App extends Component {

    constructor() {
        super();
        this.handleWindowScroll = this.handleWindowScroll.bind(this);
    }

    componentDidMount() {
        this.handleWindowScroll();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll');
    }

    handleWindowScroll() {
        window.addEventListener('scroll', function() {
            if (document.body.scrollTop >= 70) {
                document.querySelector('.App-header').classList.add('App-header--scrolled');
            } else {
                document.querySelector('.App-header').classList.remove('App-header--scrolled');
            }
        });
    }

    render() {

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <div className="App-header__inner">
                            <div className="container container--full-width">
                                <div className="row">
                                    <Link to="/" className="App-logo" title="Home page">
                                        <img src={logo} height={40} width={200} alt="Site logo"/>
                                    </Link>
                                    <Navigation/>
                                </div>
                            </div>

                        </div>
                    </header>
                    <main id="main">
                        <Switch>
                            <Route exact path="/" component={() => {
                                return (

                                    <Home theme={this.props.activeTheme}/>
                                )
                            }}/>
                            <Route path="/about" component={About}/>
                            <Route exact path="/portfolio" component={()=> {

                                return (
                                    <Portfolio portfolio={portfolio}
                                               itemsLimit={100}
                                               theme={this.props.activeTheme}
                                               displayFilters={true}/>
                                )
                            }}/>
                            <Route path="/portfolio/:project" component={(props)=> {
                                return (
                                    <PortfolioProject currentProjectSlug={props.match.params.project}  />
                                )
                            }} />

                            <Route component={NotFound}/>
                        </Switch>
                    </main>
                    <Footer/>
                </div>
            </Router>
        );
    }

    // TODO : Add Prop types
}




export default App;
