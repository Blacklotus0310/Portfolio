import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() { 
        if(this.props.data){
            var network = this.props.data.social.map(function(network){
                return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
            })
        }
        return (  
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-link">
                            {network}
                        </ul>
                        <ul className="copyright">
                            <li>&copy; Copyright 2020 Blacklotus</li>
                            <li>Design by <a title="styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
                        </ul>
                    </div>
                    <div id="go-to-top"><a className="smoothscroll" title="Back To Top" href="#home">
                        <i className="icon-up-open"></i>
                    </a>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default Footer;