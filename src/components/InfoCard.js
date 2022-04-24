import React from 'react';
import './Cards.css';
import InfoCardItem from './InfoCardItem';

function Cards() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <h1>What will you get</h1>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <InfoCardItem
                        text='Certificate'
                            sub='Earn an industry standard certificate upon completion of this class.'
                        />
                        <InfoCardItem
                        text='Discussion Forum'
                            sub='Discuss study material with other students.'
                        />
                        <InfoCardItem
                            text='Tutorial Module'
                            sub='Electronic reading material is presented in easy-to-understand language.'
                        />
                        <InfoCardItem
                            text='Quiz'
                            sub='Multiple choice quizzes help you understand the material being studied.'
                        />
                        <InfoCardItem
                            text='Exam'
                            sub='Validate your knowledge by doing exam questions.'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
