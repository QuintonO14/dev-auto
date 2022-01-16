import styled from "styled-components"
import { useRef, useLayoutEffect, useState } from 'react'
import gsap from "gsap"
import Loader from "./Loader"

const Landing = () => {
    const [loaded, setLoaded] = useState(false)
    const container = useRef()
    const text = useRef();
    const cars = useRef();
    const mobile = useRef();
    const tl = gsap.timeline()

    setTimeout(() => {
        setLoaded(true)
    }, 500)

    useLayoutEffect(() => {
            tl.from(container.current, {
                xPercent: -100,
                duration: 0.5,
            })
            tl.from(cars.current, {
                xPercent: -100,
                duration: 0.5
            }, "=-0.5")
    
            tl.from(text.current, {
                yPercent: -100,
                opacity: 0,
                autoAlpha: 0,
                duration: 0.5
            })
            tl.from(mobile.current, {
                transform: "translateX(10vw)",
                opacity: 0,
                duration: 0.5
            }, "-=0.5")
    })

    return (
    <>
       {loaded ? (
           <>
             <Container ref={container}>
           <Logo>
               <img src="assets/logo.svg" alt="logo" />
           </Logo>
           <ContainerText ref={text}>
            <h1>Drive a new <br /> car every month.</h1>
            <a href="#App">Available On The App<img src="assets/arrowright.svg" alt="arrow"/></a>
           </ContainerText>
           <ContainerImg ref={mobile}>
                <img src="assets/currentvehicle.png" alt="current" />
           </ContainerImg>
           <Cars ref={cars}>
            <img src="assets/audi.png" alt="audi" />
            <img src="assets/mercedes.png" alt="benz" />
            <img src="assets/porsche.png" alt="porsche" />
           </Cars>
        </Container>  
           </>
       ) : (
            <Load>
                <Loader />
            </Load>
       )}
     </>
    )
}

const Cars = styled.div`
    position: absolute;
    top: 65vh;
    width: 100%;
    height: 10rem;

    img {
        position: absolute;
        width: 20rem;

        &:nth-child(1) {
            left: -10%;
            bottom: 50px;
        }
    
        &:nth-child(2) {
            left: 30%;
        }

        &:nth-child(3) {
            left: 10%;
            transform: scale(1.2)
        }

        @media (max-width: 500px) {
            &:nth-child(1) {
                transform: scale(0.8)
            }
    
            &:nth-child(2) {
                transform: scale(0.8)
            }
    
            &:nth-child(3) {
                transform: scale(0.8)
            }
        }
    }

    @media(max-width:500px) {
        top: 90%;
    }
    @media(orientation: landscape) {
        top: 90vh;
    }

    @media(orientation: landscape) and (min-width: 1000px) {
        top: 65vh;
    }
    @media(min-width:500px) and (max-width: 1000px) {
        top: 90%:
    }
`

const Container = styled.section`
  background-color: #FBC843;
  display: flex;
  height: calc(100vh - 30vh);
  width: auto;
  flex-direction: column;
  position: relative;
  font-family: Bebas Neue, sans-serif;

  @media(orientation: landscape) and (max-width: 1000px) {
      height: 100vh;
  }
`

const ContainerText = styled.div`
    width: 100%;
    text-align: left;
    padding-left: 5vw;
    h1 {
        text-transform: uppercase;
        color: white;
        font-size: 3rem;
        margin: 0
    }

    a {
        color: black;
        text-decoration: none;
        font-weight: bold;
        font-family: Roboto, sans-serif;

        img { 
            margin-left: 2rem;
        }
    }

    @media (min-width: 800px){
        width: 100%;

        h1 {
            font-size: 6rem;
        }
    }

    @media(orientation: landscape) and (max-width: 1000px) {
        h1 {
            font-size: 4rem
        }
    }
`

const ContainerImg = styled.div`
    width: 30%;
    display: block;
    position: absolute;
    right: 0;
    top: 10%;
    img {
        height: 70vh;
        width: 20vw;
        display: block;
        filter: drop-shadow(-15px 10px 10px rgba(0, 0, 0, 0.5))
    }  
    @media(max-width: 1000px) {
        display: none;
        img { 
            display: none;

        }
    }
`

const Load = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

const Logo = styled.div`
    display: flex;
    padding: 4rem;

    img {
        filter: invert(1)
    }

    @media(max-width: 800px) {
        padding: 2rem;
    }
`

export default Landing