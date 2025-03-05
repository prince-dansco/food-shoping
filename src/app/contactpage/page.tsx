import React from 'react'
import FormComp from '../components/formComp/Form'
import HeadlinesPages from '../components/pagesheadlines/Headers'
import CompanyDetail from '../components/companyDetail/page'

export default function Contact() {
  return (
    <div>
    <HeadlinesPages  h1= 'Contact Us' />
     <FormComp />
     <CompanyDetail />
    </div>
  )
}
