import React, { Fragment } from 'react'
import {Modal} from 'antd'
import languages from '../../../redux/constants/Languages/Languages'
const LanguageModal = ({handleCloseLanguageModal,showLanguageModal}) => {
  return (
    <Fragment>
        <Modal
    title="Languages"
    centered
    open={showLanguageModal}
    onOk={handleCloseLanguageModal}
    onCancel={handleCloseLanguageModal}
    width="50%"
  >


    <div class="container" style={{ maxHeight: 480, overflow: "auto" }}>
          <div class="row  row-cols-4 gy-5">
            {languages.map(({ code, name, country_code, country_name }) => (
              <div class="col col-lg-3 col-md-6 col-sm-12">
                <button class="w-100 rounded-pill p-3 my-2 border bg-light">
                  <span>
                    <img
                      src={`https://flagicons.lipis.dev/flags/4x3/${country_code}.svg`}
                      class="img-fluid mx-2"
                      width={24}
                      height={24}

                      // style={{
                      //   opacity: currentLanguageCode === code ? 0.5 : 1,
                      // }}
                    ></img>
                    {name}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>

        </Modal>
    </Fragment>
  )
}

export default LanguageModal