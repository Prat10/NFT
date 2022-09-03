import React from 'react';
import Button from '../../commons/Buttons';
import './TopFold.css';

const TopFold=()=>{  
    return(
   <div className='topfold absolute-center'>
    <div className='tf-left'>
        <div className='tf-heading'>Discover collect, & sell <span className='header-gradient'>ExtraOrdinary</span> NFTs </div>
        <div className='tf-description'>
            Please make sure that you are buying and selling most trending NFTs, Welcome to My BLockchain World
        </div>
        <div className='tf-left-btns'>
         <Button btnType="PRIMARY" btnText="EXPLORE"/>
         <Button btnType="SECONDARY" btnText="Create" customclass='tf-left-secondary-btn'/>
        </div>
        <div className='tf-left-infoStats'>
            <div className='tf-is-infoItem absolute-center'>
                <div className='tf-infoItem-count'>200k+</div>
                <div className='tf-infoItem-label'>Collections</div>
            </div>
            <div className='tf-is-infoItem absolute-center'>
                <div className='tf-infoItem-count'>10k+</div>
                <div className='tf-infoItem-label'>Artists</div>
            </div>
            <div className='tf-is-infoItem absolute-center'>
                <div className='tf-infoItem-count'>423k+</div>
                <div className='tf-infoItem-label'>Community</div>
            </div>
        </div>
    </div>
    <div className='tf-right'>
        <div className='tf-right-bg-blob'></div>
        <div className='tf-right-diamond'>
            <div className='tf-r-diamond-item absolute-center'>
                <img className='tf-r-diamond-img' 
                src="https://openseauserdata.com/files/c3a312c53514642e8041c65e10b40a52.gif"
                alt='diamond-banner'/>
            </div>
            <div className='tf-r-diamond-item absolute-center'>
                <img className='tf-r-diamond-img' 
                src="https://openseauserdata.com/files/543630193cf32ac09c0356e767d2891e.gif"
                alt='diamond-banner'/>
            </div>
            <div className='tf-r-diamond-item absolute-center'>
                <img className='tf-r-diamond-img' 
                src="https://lh3.googleusercontent.com/pa9MKeoPbY8OOIfcm6EVj1hhSdK--UD7YUts_34FXSjPzy912WIfsbIocQzUXTu9tdMaUXIWDbO98gbVEvZ-AX1plvdcReRnXHSqhQ=s168"
                alt='diamond-banner'/>
            </div>
            <div className='tf-r-diamond-item absolute-center'>
                <img className='tf-r-diamond-img' 
                src="https://openseauserdata.com/files/24d69f2fb87719edc973d686a0b43226.gif"
                alt='diamond-banner'/>
            </div>
        </div>
    </div>
   </div>
    )
}
export default TopFold;