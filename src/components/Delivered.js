import { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

const Delivered = () => {
    const text = useRef()
    const map = useRef()
    const mobile = useRef()
    const car = useRef()
    const tl = gsap.timeline()

    useLayoutEffect(() => {
            tl.from(map.current, {
                xPercent: 100,
                duration: 0.5,
            })
            tl.from(text.current.firstChild, {
                yPercent: -100,
                autoAlpha: 0,
                duration: 0.5,
            }, 0.1)

            tl.from(text.current.lastChild, {
                yPercent: -100,
                autoAlpha: 0,
                duration: 0.5
            }, 0.2)
            
            tl.from(car.current, {
                xPercent: -100,
                autoAlpha: 0,
                duration: 0.5,
            }, 0.3)

            tl.from(mobile.current, {
                yPercent: -100,
                autoAlpha: 0,
                duration: 0.5
            }, 0.4)
    })

    return (
        <Container>
            <DeliverText >
                <div ref={text}>
                    <h2>Delivered to your door.</h2>
                    <p>Eleanor works with your schedule to have a white-glove delivery service
                        deliver your new vehicle right to your door.
                    </p>
                </div>
            </DeliverText>
            <DeliveryImages>
                <img ref={map} src="assets/map.png" alt="map" />
                <img ref={mobile} src="assets/delivered.png" alt="delivered" />
                <img ref={car} src="assets/porsche.png" alt="porsche" />
            </DeliveryImages>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Bebas Neue, san-serif;

    @media(min-width: 1000px) {
        flex-direction: row;
        padding: 4rem;
    }
`

const DeliverText = styled.div`
    overflow: hidden;
    padding: 1rem;

    h2 {
        font-size: 3rem;
    }

    p {
        font-family: Roboto, sans-serif;
        text-align: left;
        font-size: 1.2rem;
    }

    @media(min-width: 1000px) {
        width: 40%;
        h2 {
            width: 75%;
            font-size: 4rem;
            text-align: left;
        }

        p { 
            width: 75%;
        }
       
    }
`

const DeliveryImages = styled.div`
    position: relative;
    padding: 3rem 0;
    overflow: hidden;
    height: 50vh;

    img {
        height: 40vh;
        width: 125%;
        right: -5%;
        position: absolute;


        &:nth-child(2) {
            width: 60%;
            height: 55vh;
            left: 20%;
            top: 0;
            filter: drop-shadow(-15px 10px 10px rgba(0, 0, 0, 0.5));
        }

        &:nth-child(3) {
            display: none;
        }
    }

    @media(min-width: 1000px) {
        width: 60%;
        overflow: visible;

        img {
            width: 100%;
            height: 50vh;
            &:nth-child(2) {
                width: 35%;
                left: 50%;
                height: 60vh;

            }

            &:nth-child(3) {
                display: block;
                height: 10vh;
                width: 40vh;
                bottom: 5%;
                left: -15%;
            }
        }
    }

    @media(orientation: landscape) and (max-width: 1000px) {
        height: 75vh;
        img {
            height: 60vh;
            &:nth-child(2) {
                width: 30%;
                left: 35%;
                height: 80vh;
            }
        }
    }

    @media(orientation: landscape) and (max-height: 400px) {
        height: 125vh;
        img {
            height: 80vh;
            &:nth-child(2) {
                width: 35%;
                left: 35%;
                height: 100vh;
            }
        }
    }
`

export default Delivered;