
import React, { Component } from 'react';

// import Typed from 'typed.js';

import Typed from 'react-typed';


export default class Header extends Component {

  componentDidMount() {
    const options = {
      strings: [
        "안녕하세요 최홍준의 포트폴리오 입니다."
      ],
      typeSpeed: 150,
      startDelay: 500,
      loop: false,

    }
    this.typed = new Typed(this.el, options);
  }

  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
               <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>
         <div className="row banner">
            <div className="banner-text">
               <h1 >
                <Typed
                    strings={['안녕하세요 최홍준의 포트폴리오 입니다.']}
                    typeSpeed={150}
                />
                </h1>
               <hr/>
               <ul className="social">
                {
                resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>
         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>
      </header>
      </React.Fragment>
    );

  }

}