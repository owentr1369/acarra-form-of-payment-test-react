import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { TextField, Button } from '@mui/material';
import SelectableLabel from "../SelectableLabel/SelectableLabel";
import './_PaymentForm.scss'

import CalendarRegular from '../../assets/svg/calendar.svg';
import LocationDotRegular from '../../assets/svg/location-dot.svg'

const service_image = require('../../assets/png/service_image.png') as string;

const PaymentForm = () => {
    const logOut = () => {
        console.log('Log out');
    }
    const [payOption, setPayOption] = useState('cash')

    let headerContent = 'Choose the form of payment'
    let nextContent = 'Next'

    const payOptions = [
        { label: 'Cash', slug: 'cash' },
        { label: 'Credit card', slug: 'credit_card' },
        { label: 'eWallet/ Virtual bank', slug: 'ewallet' },
    ]
    const service = {
        title: 'Japanese lessons',
        time: 'Nov 7, 2020 · 11:30',
        location: 'Client`s place',
        price: '350.000'
    }

    const user = {
        name: 'John',
        phone: '(88) 99602-2404'
    }

    return (
        <>
            <div className="payment_form">
                <Header headerContent={headerContent} />
                <div className="payment_form-body">
                    <div className="user">
                        <div className="user_info">
                            <div className="user_info-avatar">J</div>
                            <div className="user_info-detail">
                                <div className="name">{user.name}</div>
                                <div className="phone">{user.phone}</div>
                            </div>

                        </div>
                        <div className="user-action">
                            <Button onClick={logOut} className="log_out" variant="text">Log out</Button>
                        </div>
                    </div>
                    <div className="select_service">
                        <div className="select_service-title">
                            Select service
                        </div>
                        <div className="select_service-info">
                            <div className="image">
                                <img src={service_image} alt="" />
                            </div>
                            <div className="detail">
                                <div className="detail-title">
                                    {service.title}
                                </div>
                                <div className="detail-time">
                                    <img src={CalendarRegular} alt="" />
                                    <div className="detail-time-text">
                                        {service.time}
                                    </div>
                                </div>
                                <div className="detail-location">
                                    <img src={LocationDotRegular} alt="" />
                                    <div className="detail-location-text">
                                        {service.location}
                                    </div>
                                </div>
                                <div className="detail-price">
                                    Rp {service.price}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="location">
                        <div className="location-title">
                            Enter your location
                        </div>
                        <div className="location-input">
                            <TextField id="location" placeholder="Enter address" variant="outlined" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div className="note">
                        <div className="note-title">
                            Note (optional)
                        </div>
                        <div className="note-input">
                            <TextField id="note" placeholder="Enter text here" variant="outlined" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div className="pay">
                        <div className="pay-title">
                            Choose a way to pay
                        </div>
                        <div className="pay-options">
                            <SelectableLabel payOptions={payOptions} payOption={payOption}
                                setPayOption={setPayOption}
                            />
                        </div>
                    </div>
                    <div className="confirm">
                        <label className="confirm-wrapper container ">
                            <input type="checkbox" />
                            <span className="confirm-wrapper-label">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <a href="#">do eiusmod</a>
                            </span>
                            <span className="checked checkmark"></span>
                        </label>
                    </div>
                </div>
                <Footer nextContent={nextContent} />
            </div>
        </>
    )
}

export default PaymentForm