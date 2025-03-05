import React from 'react'
import FormComp from '../components/formComp/page'
import HeadlinesPages from '../components/pagesheadlines/page'
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
