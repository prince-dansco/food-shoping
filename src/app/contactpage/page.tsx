import React from 'react'
import FormComp from '../components/contactComp/formComp/Form'
import HeadlinesPages from '../components/globalComp/pagesheadlines/Headers'
import UpdatedCompanyDetail from '../components/contactComp/companyDetail/updatedVersion'

export default function Contact() {
  return (
    <div>
    <HeadlinesPages  h1= 'Contact Us' />
     <FormComp />
     < UpdatedCompanyDetail/>
    </div>
  )
}
