import { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

const Services = () => {
    const services = useRef()
    const tl = gsap.timeline()

    useLayoutEffect(() => {
        tl.from(services.current.childNodes[0], {
            autoAlpha: 0,
            yPercent: -10,
            duration: 0.3
        })
        
        tl.from(services.current.childNodes[1], {
            autoAlpha: 0,
            yPercent: -10,
            duration: 0.3
        })
        tl.from(services.current.childNodes[2], {
            autoAlpha: 0,
            yPercent: -10,
            duration: 0.3
        })
    })
    return (
        <Container ref={services}>
            <Service>
                <img src="assets/coin.svg" alt="coin" />
                <h3>Simple Monthly Pricing</h3>
                <p>Pick your plan, pay the monthly price. That's it. No hidden fees!</p>
            </Service>
            <Service>
                <img src="assets/insurance.svg" alt="coin" />
                <h3>Vehicle Insurance Included</h3>
                <p>That's right, you're covered. All Eleanor plans include insurance coverage.</p>
            </Service>
            <Service>
                <img src="assets/wrench.svg" alt="wrench" />
                <h3>Maintenance is covered</h3>
                <p>Leave it to us. Don't worry about maintaining your vehicle. Eleanor covers that as well.</p>
            </Service>
        </Container>
    )
}

const Container = styled.div`
    display: flex; 
    flex-direction: column;

    @media(min-width: 900px){
        flex-direction: row;
        justify-content: space-between;
    }
`

const Service = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    background-color: #F5F5F7;
    margin: 1rem 0;

    img {
        height: 10rem;
        width: 10rem;
    }

    h3 {
        font-size: 1.5rem
    }

    p {
        font-family: Roboto, sans-serif;
    }

    @media(min-width: 900px) {
        width: 30%;
        margin: 0;
    }
`

export default Services;