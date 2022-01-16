import './App.css';
import { useRef, Suspense, lazy } from 'react'
import styled from 'styled-components';
import useIntersectionObserver from './hooks/useIntersectionObserver'
import Landing from './components/Landing';
import Loader from './components/Loader';
const Select = lazy(() => import('./components/Select'))
const Delivered = lazy(() => import('./components/Delivered'))
const Trade = lazy(() => import('./components/Trade'))
const Services = lazy(() => import('./components/Services'))
const Customers = lazy(() => import('./components/Customers'))

function App() {
  const select = useRef()
  const delivered = useRef()
  const trade = useRef()
  const service = useRef()
  const customer = useRef()
  const isSelectVisible = useIntersectionObserver(select)
  const isDeliveredVisible = useIntersectionObserver(delivered)
  const isTradeVisible = useIntersectionObserver(trade)
  const isServiceVisible = useIntersectionObserver(service)
  const isCustomerVisible = useIntersectionObserver(customer)

  return (
    <div className="App">
      <Landing />
      <Section>
            {isSelectVisible && (
              <Suspense fallback={<Loader />}>
                <Select visible={isSelectVisible} />
              </Suspense>
            )}
      </Section>
      <Section ref={delivered}>
            {isDeliveredVisible && (
              <Suspense fallback={<Loader />}>
              <Delivered visible={isDeliveredVisible} />
            </Suspense>
            )}
      </Section>
      <Section ref={trade}>
            {isTradeVisible && (
              <Suspense fallback={<Loader />}>
              <Trade visible={isTradeVisible} />
            </Suspense>
            )}
      </Section>
      <Section ref={service}>
            {isServiceVisible && (
              <Suspense fallback={<Loader />}>
              <Services visible={isServiceVisible} />
            </Suspense>
            )}
      </Section>
      <Section ref={customer}>
            {isCustomerVisible && (
              <Suspense fallback={<Loader />}>
                <Customers visible={isCustomerVisible} />
              </Suspense>
            )}
      </Section>
      <Footer>
        <img src="assets/logo.svg" alt="logo" />
        <div>
          <a href="#About">About Us</a>
          <a href="#Terms">Terms of Use</a>
          <a href="#FAQ">FAQ</a>
        </div>
      </Footer>
    </div>
  );
}

const Footer = styled.footer`
   display: flex;
   justify-content: space-between;
   padding: 2rem;

   div {
     display: none;
     @media(min-width: 1000px) {
       display: flex;
       justify-content: space-evenly;
       width: 25%;

       a {
         color: black;
         text-decoration: none;
         font-family: Roboto, sans-serif;
       }
     }
   }

   @media(orientation: landscape) and (max-width: 1000px) {
      margin-top: 40%;
   }
`

const Section = styled.section`
   margin-top: 45vh;
   margin-bottom: 15vh;
`

export default App;
