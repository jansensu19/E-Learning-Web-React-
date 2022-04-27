import React from 'react'
import "./Benefit.css"

function Benefit() {
    return (
        <div className='benefit'>
            <div className='benefit__container'>
                <div className='benefit__wrapper'>
                    <ul className='benefit__items'>
                        <li className='benefit__item'>
                            <div className='benefit__item__info'>
                                <h5 className='item__title'><i class="far fa-browser"></i>Access All Classes</h5>
                                <p className='item__subtext'>Full access to all classes at Dicoding Academy.</p>
                            </div>
                            <div className='benefit__item__info'>
                                <h5 className='item__title'><i class="far fa-window"></i>Submission</h5>
                                <p className='item__subtext'>Put your technical skills to the test by doing submission assignments.</p>
                            </div>
                        </li>
                    </ul>

                    <ul className='benefit__items'>
                        <li className='benefit__item'>
                            <div className='benefit__item__info'>
                                <h5 className='item__title'><i class="far fa-comments"></i>Discussion Forum</h5>
                                <p className='item__subtext'>Discuss study material with other students.</p>
                            </div>
                            <div className='benefit__item__info'>
                                <h5 className='item__title'><i class="far fa-file-code"></i>Code Review</h5>
                                <p className='item__subtext'>The code you are working on will be reviewed comprehensively by the Reviewer.</p>
                            </div>
                        </li>
                    </ul>

                    <ul className='benefit__items'>
                        <li className='benefit__item'>
                            <div className='benefit__item__info'>
                                <h5 className='item__title'><i class="far fa-code"></i>Interactive Code</h5>
                                <p className='item__subtext'>Write and run your practice code directly on the module.</p>
                            </div>
                            <div className='benefit__item__info'>
                                <h5 className='item__title'><i class="far fa-file-certificate"></i>Certificate</h5>
                                <p className='item__subtext'>Certificate of passing competency if you successfully complete the class following the final project submission well.</p>
                            </div>
                        </li>
                    </ul>

                    <ul className='benefit__items'>
                        <li className='benefit__item'>
                            <div className='benefit__item__info'>
                                <h5 className='item__title'><i class="far fa-clipboard-list"></i>Exam</h5>
                                <p className='item__subtext'>Validate your knowledge by doing exam questions.</p>
                            </div>
                            <div className='benefit__item__info'>
                                <h5 className='item__title'><i class="far fa-file-certificate"></i>Renew Certificate</h5>
                                <p className='item__subtext'>Renew your expired certificate.</p>
                            </div>
                        </li>
                    </ul>

                    <div className="trial">
                    <h4>Still not sure to subscribe? Please try free for 15 days and access all classes at Dicoding Academy.</h4>
                    <button>Try Now</button>
                    <a href="/">Benefit Trial</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefit;
