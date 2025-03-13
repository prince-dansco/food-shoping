import React from 'react'
import FormComp from '../components/formComp/Form'
import HeadlinesPages from '../components/pagesheadlines/Headers'
import UpdatedCompanyDetail from '../components/companyDetail/updatedVersion'

export default function Contact() {
  return (
    <div>
    <HeadlinesPages  h1= 'Contact Us' />
     <FormComp />
     < UpdatedCompanyDetail/>
    </div>
  )
}
