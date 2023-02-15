import React, { Fragment } from 'react'
import HomeHeader from '../header/HomeHeader'
import HomeFooter from '../footer/HomeFooter'

const MainLayout = (props) => {
  return (
    <Fragment>
        <HomeHeader />
        {props.children}
        <HomeFooter />
    </Fragment>
  )
}

export default MainLayout