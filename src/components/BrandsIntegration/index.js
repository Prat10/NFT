import React from 'react'
import './BrandsIntegration.css'
const BrandsIntegration = () => {
  return (
    <div className="brands-integration absolute-center">
      <div className='first'>
      <img className='img-bg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png' alt='brand-logo'/>
       <img className='img-bg' src='https://www.coinpoint.net/wp-content/uploads/2017/11/MyEtherWallet.png' alt='brand-logo'/>
       <img className='img-bg'src='https://reconshell.com/wp-content/uploads/2022/03/v11_.png' alt='brand-logo'/>
       </div>
       <div className='second'>
        <img className='img-bg'src='https://trustwallet.com/assets/images/media/assets/vertical_blue.png' alt='brand-logo'/>
        <img className='img-bg'src='https://1000logos.net/wp-content/uploads/2022/05/WalletConnect-Symbol.png'alt='brand-logo'/>
       </div>
       <div className='wallet header-gradient'>Required Wallets</div>
    </div>
  )
}

export default BrandsIntegration;