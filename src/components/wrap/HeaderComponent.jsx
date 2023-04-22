import React from 'react';

export default function HeaderComponent() {
    return (
        <header id="header">
            <div className="container">
                <div className="gap">
                    <h1>
                        <a href="#wrap">
                            <img src="./img/logo-photography.png.webp" alt=""/>
                        </a>
                    </h1>
                    <nav>
                        <ul className="nav-menu">
                            <li><a className="nav-btn" href="#section5">ABOUT</a></li>
                            <li><a className="nav-btn" href="#section6">SERVICES</a></li>
                            <li><a className="nav-btn" href="#section8">PORTFOLIO</a></li>
                            <li><a className="nav-btn" href="#section9">AWARDS</a></li>
                            <li><a className="nav-btn" href="#section10">BLOG</a></li>
                            <li><a className="nav-btn" href="#section15">CONTACT</a></li>
                        </ul>

                        {/* <!-- 모바일 햄버거메뉴(앱바) --> */}
                        <div className="mobile">
                        <a href="#" className="mobile-btn">
                                <i className="line line1"></i>
                                <i className="line line2"></i>
                                <i className="line line3"></i>
                        </a> 
                        </div>

                    </nav>
                </div>
            </div>
        </header>
    );
};
