import React from 'react';
import '../styles/services.css'
import callLogo from '../images/call.png'
import healthP from '../images/package.png'
import appointment from '../images/appointment.png'
import blog from '../images/blog.png'
import hero from '../images/hero.jpg'
import RestoreIcon from '@mui/icons-material/Restore';
import PaidIcon from '@mui/icons-material/Paid';
import ChatIcon from '@mui/icons-material/Chat';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';



const divStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${hero})`,
    backgroundSize: 'cover',
};

const Services = () => {
    return (
        <div style={divStyle}>

            <div className="ml-32">
                <h1 >Our Services</h1>
                <p>We are committed to being your shoulder to lean on and providing honest advice for your loved one’s situation during this delicate time.</p>
            </div>
            <div className="grid grid-cols-3 p-8">
                <div className="w-auto ml-32 rounded-lg">
                    <a href="http://localhost:3000/home" style={{ paddingLeft: 13, textDecoration: 'none' }} >
                        <span><img src={callLogo} alt="img" className='rounded-lg' /></span>
                        <div>
                            <h4>Doctor Consultation</h4>
                            <p>Appointment with the best doctors of your choice</p>
                        </div>
                    </a>
                </div>

                <div className="w-auto ml-32 rounded-lg bg-yellow-400">
                    <a href="http://localhost:3000/home" style={{ paddingLeft: 13, textDecoration: 'none' }} >
                        <span><img src={appointment} alt="" className='rounded-lg' /></span>
                        <div>
                            <h4>Book Appointment</h4>
                            <p>Appointment with the best doctors of your choice</p>
                        </div>
                    </a>
                </div>

                <div className="w-auto ml-32 rounded-lg bg-blue-400">
                    <a href="http://localhost:3000/home" style={{ paddingLeft: 13, textDecoration: 'none' }} >
                        <span><img src={healthP} alt="" className='rounded-lg' /></span>
                        <div>
                            <h4>Health Packages</h4>
                            <p>Appointment with the best doctors of your choice</p>
                        </div>
                    </a>
                </div>

                <div className="w-auto ml-32 rounded-lg bg-green-400">
                    <a href="http://localhost:3000/home" style={{ paddingLeft: 13, textDecoration: 'none' }}>
                        <span><img src={blog} alt="" className='rounded-lg' /></span>
                        <div>
                            <h4>Visit our blog</h4>
                            <p>Appointment with the best doctors of your choice</p>
                        </div>
                    </a>
                </div>
            </div>





            <section className="flex bg-slate-400">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="question section-heading">
                                <h2> Why book an appointment through Hamro Doctor?</h2>
                                <span>Book an appointment online with Hamro Doctor at a hospital/clinic without a hectic process.
                                </span>
                            </div>
                        </div>
                        <div class="col-md-7 offset-md-1">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="box-wrap">
                                        <div class="icon-sec">
                                        </div>
                                        <h5>Save Time<RestoreIcon />
                                        </h5>
                                        <p>Avoid waiting with a long queue &amp; book an appointment instantly.</p>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="box-wrap">
                                        <div class="icon-sec">
                                            {/* <img src="/theme/default/img/gray.png" alt="">*/}
                                            <i class="ri-checkbox-circle-line icon-gray"></i>
                                        </div>
                                        <h5>Save Money<AccountBalanceWalletIcon/></h5>
                                        <p>Get special discount offers on appointment booking with Hamro Doctor.</p>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="box-wrap">
                                        <div class="icon-sec">
                                        </div>
                                        <h5>Convenient payment gateways<PaidIcon/></h5>
                                        <p>Payment for the appointment made easier through widely used payment gateways in Nepal.</p>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="box-wrap">
                                        <div class="icon-sec">
                                            {/*<img src="/theme/default/img/blue.png" alt="">*/}
                                            <i class="ri-message-2-line icon-blue"></i>
                                        </div>
                                        <h5> Instant follow up<ChatIcon/>
                                        </h5>
                                        <p>Get a call from the hospital/clinic right away after the payment.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};
export default Services;