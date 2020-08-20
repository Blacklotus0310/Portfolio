import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() { 
        if(this.props.data){
            var message = this.props.data.contactmessage;
            var name = this.props.data.name;
            var street = this.props.data.address.street;
            var city = this.props.data.address.city;
            var state = this.props.data.address.state;
            var zip = this.props.data.address.zip;
            var email = this.props.data.email;
            var phone = this.props.data.phone;
        }
        return (  
            <section id="contact">
                <div className="row section-head">
                    <div className="two columns header-col">
                        <h1><span>Get in touch.</span></h1>
                    </div>
                    <div className="ten columns">
                        <p className="lead">{message}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="eight columns">
                        <form action method="post" id="contactForm" name="contactForm">
                            <fieldset>
                                <div>
                                    <label for="contactName">Name <span className="required">*</span></label>
                                    <input type="text" size="35" id="contactName" name="contactName" />
                                </div>
                                <div>
                                    <label for="contactName">Email <span className="required">*</span></label>
                                    <input type="text" size="35" id="contactEmail" name="contactEmail" />
                                </div>
                                <div>
                                    <label for="contactName">Subject</label>
                                    <input type="text" size="35" id="contactSubject" name="contactSubject" />
                                </div>
                                <div>
                                    <label for="contactName">Message <span className="required">*</span></label>
                                    <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" />
                                </div>
                                <div>
                                    <button className="submit">Submit</button>
                                    <span id="image-loader">
                                            <img src="image/loader.gif" alt="" />
                                    </span>
                                </div>
                            </fieldset>
                        </form>
                        <div id="message-warning">Error boy</div>
                        <div id="message-success">
                            <i className="fa fa-check"></i>
                            "Your message was sent, thanks you"
                            <br />
                        </div>
                        
                    </div>
                    <aside className="four columns footer-widgets">
                            <div className="widget widget_contact">
                                <h4>Address and Phone</h4>
                                <p className="address">
                                    {name} <br />
                                    {street} <br />
                                    {city}, {state}, {zip}<br />
                                    <span>{phone}</span>
                                </p>
                            </div>
                            <div className="widget widget_tweets">
                                <h4 className="widget-title">Lates Tweets</h4>
                                <ul id="twitter">
                                    <li><span>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                                    Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                                    <a href="#">http://t.co/CGIrdxIlI3</a></span>
                                    <b><a href="#">2 Days Ago</a></b></li>
                                    <li><span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                    eaque ipsa quae ab illo inventore veritatis et quasi
                                    <a href="#">http://t.co/CGIrdxIlI3</a></span>
                                    <b><a href="#">3 Days Ago</a></b></li>
                                </ul>
                            </div>
                        </aside>
                </div>
            </section>
        );
    }
}
    
export default Contact;
