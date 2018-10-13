import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Guardián del portal</h1>
    <Link to="/privacy/">Política de privacidad</Link>
  </Layout>
)

export default IndexPage
