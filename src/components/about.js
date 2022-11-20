import React from 'react'
import '../styles/about.css'
import about from '../images/about.jpg'

export const About = (props) => {
    return (
        <div id='about'>
            <div className='row'>
                <div className='cols-xs-12 col-md-6'>
                    <img src= {about}className='img-responsive' alt="" />
                </div>
                <div className='col-xs-12 col-md-6'>
                    <div className='about-text'>
                        <h2>About Us</h2>
                        <p>{props.data ? props.data.paragraph : "loading...."}</p>
                        <h3>Why Us?</h3>
                        <div className='col-lg-6 col-sm-6 col-xs-12'>
                            <ul>
                                {props.data
                                    ? props.data.Why.map((d, i) => (
                                        <li key={`${d}-${i}`}>{d}</li>
                                    ))
                                    : "loading"}
                            </ul>
                        </div>
                        <div classsName='col-lg-6 col-sm-6 col-xs-12'>
                            <ul>
                                {props.data
                                    ? props.data.Why2.map((d, i) => (
                                        <li key={`${d}-${i}`}> {d}</li>
                                    ))
                                    : "loading"}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

