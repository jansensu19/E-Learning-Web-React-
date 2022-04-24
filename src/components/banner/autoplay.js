// use jsx to render html, do not modify simple.html

import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import React from 'react';
import AndroidDeveloper from './images/androiddeveloper.jpg';
import WebDeveloper from './images/webdeveloper.jpg';
import '../../index.less';
import './assets/index.less';
import './autoplay.css';

const { Element } = BannerAnim;
const BgElement = Element.BgElement;
function banner() {
    return (
      <div className='autoplay-container'>
      <BannerAnim autoPlay>
        <Element key="aaa"
          prefixCls="banner-user-elem"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              minHeight: '50vh',
              background: `url(${AndroidDeveloper})`,
              backgroundsize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <QueueAnim name="QueueAnim">
            <h1 key="h1">Cuda</h1>
            <p key="p">Android Developer</p>
          </QueueAnim>
          <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 200 }} name="TweenOne">
            Ant Motion Demo.Ant Motion Demo
          </TweenOne>
        </Element>
        <Element key="bbb"
          prefixCls="banner-user-elem"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              minHeight: '50vh',
              background: `url(${WebDeveloper})`,
              backgroundsize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <QueueAnim name="QueueAnim">
            <h1 key="h1">Web Developer</h1>
            <p key="p">Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
          </QueueAnim>
          <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 200 }} name="TweenOne">
            Ant Motion Demo.Ant Motion Demo
          </TweenOne>
        </Element>
      </BannerAnim>
      </div>
    );
}
export default banner