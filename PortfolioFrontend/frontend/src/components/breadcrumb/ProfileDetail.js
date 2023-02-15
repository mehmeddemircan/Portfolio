import { Breadcrumb } from 'antd'
import React, { Fragment } from 'react'

const ProfileDetail = () => {
  return (
        <Fragment>
              <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application Center</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application List</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Profile Details</Breadcrumb.Item>
  </Breadcrumb>
        </Fragment>
  )
}

export default ProfileDetail