import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Head2 from '../components/Head2'
import HeaderUsed from '../components/UsedComponent/Header'
import MainUsed from '../components/UsedComponent/MainUsed'
import AsideUsed from '../components/UsedComponent/AsideUsed'
import RestUsedPage from '../components/UsedComponent/RestUsedPage'
import BetweenHeadAndHeaders from '../components/UsedComponent/BetweenHead&Header'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div>
      <Head2/>
      <body dir="rtl">
      <BetweenHeadAndHeaders/>
      <div id="root">
        <div>
          <HeaderUsed/>
          <MainUsed/>
        </div>
        <AsideUsed/>
        <div id="popUpId"></div>
        <RestUsedPage/>
        </div>
        <div id='footerNeedPadding'>
          <Footer/>
        </div>
    </body>
    </div>
  )
}
