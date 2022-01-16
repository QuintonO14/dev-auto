import { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

const Trade = () => {
    const trade = useRef()
    const swap = useRef()
    const image = useRef()
    const tl = gsap.timeline()

    useLayoutEffect(() => {
        tl.from(swap.current, {
            xPercent: -100,
            autoAlpha: 0,
            duration: 0.5        
        })
        tl.from(image.current, {
            yPercent: -10,
            autoAlpha: 0,
            duration: 0.5
        }, 0.4)

        tl.from(trade.current.firstChild, {
            yPercent: -100,
            autoAlpha: 0,
            duration: 0.3,
        }, 0.5)
        tl.from(trade.current.lastChild, {
            yPercent: -100,
            autoAlpha: 0,
            duration: 0.3
        })
    })
    return (
        <Container>
            <Trader ref={trade}>
                <h2>Trade in your car every month</h2>
                <p>Use Eleanor Trade-In Credits to trade in your vehicle for something else in our luxurious inventory.
                      Nothing says “June” like a new car!
                </p>
            </Trader>
            <Swap>
                <div ref={swap}>
                    <img src="assets/porsche3.png" alt="porsche"/>
                </div>
                <img ref={image} src="assets/swap.png" alt="swap" />
            </Swap>
        </Container>
    )
}

const Container = styled.div`
    display: flex; 
    flex-direction: column;

    @media(min-width: 1000px) {
        flex-direction: row;
        padding: 4rem;
    }
`

const Trader = styled.div`
    text-align: left;
    padding: 1rem;
    order: 1;
    font-family: Bebas Neue, sans-serif;
    
    h2 {
        font-size: 4rem;
    }
    p {
        font-size: 1.2rem;
        font-family: Roboto, sans-serif
    }

    @media(min-width: 1000px) {
        order: 2;
        align-self: center;
        width: 60%;
        h2 {
            width: 75%;
        }

        p {
            width: 100%;
        }
    }

    @media(min-width: 1000px) {
        p {
            width: 60%;
        }
    }   
`

const Swap = styled.div`
    display: flex;
    height: 70vh;
    width: 75%;
    position: relative;
    align-items: center;
    order: 2;

    div {
        background-color: #FBC843;
        height: 100%;
        display: flex;
        align-items: center;
    }

    img {
        width: 100%;
        height: 20vh;
        
        &:nth-child(2) {
            position: absolute;
            height: 60vh;
            width: 75%;
            left: 50%;
            filter: drop-shadow(5px 0px 15px rgba(0, 0, 0, 0.5))
        }
    }
    @media(min-width: 1000px) {
        order: 1;
        width: 50%;

        img {
            &:nth-child(2) {
                width: 20vw;
                left: 13vw;
            }
        }
    }

    @media(orientation: landscape) and (max-width: 1000px) {
        height: 80vh;
        img {
            &:nth-child(2) {
                width: 30%;
                height: 90%;
            }
        }   
        div {
            margin-left: 35%;
        }
    }
`

export default Trade;