import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() { 
        if(this.props.data){
            var name = this.props.data.name;
            var profilepic = "image/"+ this.props.data.image;
            var bio = this.props.data.bio;
            var street = this.props.data.address.street;
            var email = this.props.data.email;
            var city = this.props.data.address.city;
            var state = this.props.data.address.state;
            var zip = this.props.data.address.zip;
            var phone = this.props.data.phone;
            var resumeDownload = this.props.data.resumeDownload;
        }
        return ( 
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src={profilepic} alt={name} />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About me</h2>
                        <p>{bio}</p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact details</h2>
                                <p className="address">
                                    <span>{name}</span><br />
                                    <span>{street}</span><br />
                                    <span>{city}<br />{state}, {zip}</span><br />
                                    <span>{phone}</span><br />
                                    <span>{email}</span><br />
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a className="button" href={resumeDownload}>
                                        <i className="fa fa-download"></i>
                                        Download Resume
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;