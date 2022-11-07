import type { NextPage } from 'next'
import Head from 'next/head'
import Home from '../components/Home'

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gig.Events</title>
        <meta name="description" content="Generated by boris" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  )
}
export default Index