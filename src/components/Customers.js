import { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

const Customers = () => {
    const test = useRef()
    const customer = useRef()
    const audi = useRef()
    const tl = gsap.timeline()

    useLayoutEffect(() => {
            tl.from(customer.current, {
                xPercent: -100,
                duration: 1
            })
            tl.from(customer.current.firstChild,{
                xPercent: -100,
                autoAlpha: 0,
                duration: 0.75
            }, "-=0.7")
            tl.from(audi.current, {
                xPercent: -100,
                autoAlpha: 0,
                duration: 0.75
            }, "-=1.1")
            tl.from(test.current, {
                yPercent: -100,
                autoAlpha: 0,
                duration: 0.3
            }, "-=0.4")
    })

    return (
        <Container>
            <Testimonial ref={test}>
                <h2>Customers With That New Car Smell</h2>
                <p>"With Eleanor I was able to drive 2 of my dream cars this year! The process is 
                    always easy and affordable!"
                </p>
                <small>Alex Bateman, Interface Designer</small>
                <a href="#">Available On the App Store <img src="assets/arrowright.svg" alt="arrow"/></a>
            </Testimonial>
            <Customer ref={customer}>
                <img src="assets/customer.png" alt="customer" />
            </Customer>
            <Audi ref={audi} src="assets/audi.png" alt="audi" />
        </Container>
    )
}

const Audi = styled.img`
    position: absolute;
    top: 65%;
    left: 25%;
    display: none;
    @media(min-width: 1000px) {
        display: block;
        height: 50%;
        width: 40%;
    }
`


const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 65vh;
    position: relative;

    @media(min-width: 1000px) {
        flex-direction: row;
        padding: 1rem;
    }
`

const Customer = styled.div`
    background-color: #FBC843;
    height: 45vh;
    display: flex;
    justify-content: center;
    align-items: end;

    img {
        width: 50%;
        height: 80%;
    }

    @media(min-width: 1000px) {
        order: 1;
        width: 50%;
        height: 100%;
        
        img {
            width: auto;
            height: 100%;
            transform: none;
        }
    }

    @media(orientation: landscape) and (max-width: 1000px) {
        height: 100vh;
        img {
            width: 30%;
        }
    }
`

const Testimonial = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 1rem;
    font-family: Roboto, sans-serif;

    h2 {
        font-size: 3rem;
        font-family: Bebas Neue, sans-serif;
        margin: 0;
    }

    p {
        font-size: 1.2rem;
    }

    small {
        font-weight: bold;
        font-size: 1rem;
        padding: 1rem 0;
        border-bottom: 3px solid #F4F4F5;
    }

    a {
        padding: 1rem 0;
        color: black;
        text-decoration: none;

        img {
            margin-left: 2rem;
        }
    }
    @media(min-width: 1000px) {
        order: 2;
        padding: 2rem;
        width: 50%;

        h2 {
            font-size: 4rem;
            width: 75%;
        }

        p {
            width: 75%;
        }
        
        a {
            font-size: 0.8rem;
        }
    }
`


export default Customers