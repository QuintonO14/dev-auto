import selections from '../utils/data'
import { useState, useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

const Select = () => {
    const [cars, setCars] = useState(selections)
    const [index, setIndex] = useState(0)
    const carText = useRef()
    const carImage = useRef()
    const carSection = useRef()
    const carInfo = useRef()
    const holder = useRef()
    const select = useRef()
    const tl = gsap.timeline()

    useLayoutEffect(() => {
        tl.from(carSection.current, {
            xPercent: 100,
            autoAlpha: 0,
            duration: 0.3,
        })
        tl.from(carInfo.current, {
            autoAlpha: 0,
            duration: 0.3
        }, 0)
        tl.from(carInfo.current.firstChild, {
            yPercent: -100,
            autoAlpha: 0,
            duration: 0.3
        }, 0.2)
        tl.from(carInfo.current.lastChild, {
            yPercent: -100,
            autoAlpha: 0,
            duration: 0.3
        }, 0.7)
        tl.from(carImage.current, {
            xPercent: 100,
            autoAlpha: 0,
            duration: 0.5
        }, 0.2)
        tl.from(holder.current, {
            xPercent: -5,
            autoAlpha: 0,
            duration: 0.5,
        }, 0.7)
    })
    
    const changeCars = () => {
        tl.to(carImage.current, {
            autoAlpha: 0,
            xPercent: -100,
        })
        tl.to(carText.current, {
            autoAlpha: 0,
            yPercent: -100,
        }, "-=0.5")
       
        tl.from(carText.current, {
            yPercent: 100,
            autoAlpha: 1,
            duration: 0.5
        })
        tl.from(carImage.current, {
            xPercent: 100,
            autoAlpha: 0,
        }, "-=0.5")
        setIndex((index + 1) % cars.length)
    }

    return (
        <Selections ref={select}>
                   <Car ref={carSection}>
                       <Holder ref={holder}>
                        <div ref={carText}>
                        <h2>{cars[index].name}</h2>
                        <h3>{cars[index].model}</h3>
                        <Carousel>
                            <div>
                                <img src="/assets/gas.svg" alt="mpg" />
                                <h4>MPG</h4>
                                <strong>{cars[index].mpg}</strong>
                            </div>
                            <div>
                                <img src="/assets/bars.svg" alt="hp" />
                                <h4>HP</h4>
                                <strong>{cars[index].hp}</strong>
                            </div>
                            <div>
                                <img src="/assets/speedometer.svg" alt="speed" />
                                <h4>0-60</h4>
                                <strong>{cars[index].speed}</strong>
                            </div>
                        </Carousel>
                        </div> 
                       </Holder>
                       <small>
                            <img src="assets/arrowleft.svg" onClick={changeCars} alt="arrowleft"/>
                            <img src="assets/arrowright.svg" onClick={changeCars} alt="arrowRight" />
                       </small>
                   </Car>
                   <Image src={cars[index].image} ref={carImage} alt="select_car"/>
                   <Info ref={carInfo}>
                       <h2>Select a vehicle from your phone.</h2>
                       <p>Select from a wide range of luxury vehicles in our inventory. Drive it for 
                           a month, trade in the next for something else you have always wanted to own.
                       </p>
                   </Info>
        </Selections>
    )
}

const Selections = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Bebas Neue, sans-serif;
    position: relative;
    padding: 1rem;
    
    @media (min-width: 1000px){
        flex-direction: row;
        padding: 4rem;
    }
`

const Carousel = styled.div`
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h4 {
      margin-left: 1rem;
      width: 15%;
    }

    strong {
        text-align: left;
        flex-grow: 1;
        font-size: 2rem;
    }

    div > img {
        height: 2rem;
        width: 2rem;
        position: relative;
    }
`

const Holder = styled.div`
    @media(min-width: 1000px){
        margin-top: 20%;
        padding-left: 20%;
    }
`

const Car = styled.div`
    order: 2;
    background-color: #FBC843;
    text-align: left;
    position: relative;
    padding: 2rem;
    height: 40vh;
    width: auto;
    z-index: 1;

    h2 {
        font-size: 3rem;
        margin: 0;
    }

    h3 {
        margin: 0;
        margin-bottom: 10%;
        color: #4B5168;
        font-weight: 100;
    }

    div {
        overflow: hidden;
    }
    
    
    small {
        position: absolute;
        top: 0;
        right: 0;
        margin 2rem;
        display: flex;

        img {
            position: relative;
            margin: 10px;
        }
    }

    @media (min-width: 1000px) {
        order: 1;
        width: 30%;
        height: 60vh;
    }

    @media(orientation: landscape) and (max-width: 1000px){
        height: 125vh;
    }   
`

const Image = styled.img`
    width: 100%;
    position: absolute;
    bottom: -10%;
    left: 0;
    z-index: 3;

    @media (min-width: 1000px) {
        height: 25%;
        width: 30%;
        bottom: 0;
        left: 20%
    }
`

const Info = styled.div`
    order: 1;
    display: flex; 
    flex-direction: column;
    z-index: 2;
    overflow: hidden;

    h2 {
        font-size: 3rem;
        text-align: left;
    }

    p { 
        text-align: left;
        font-size: 1.2rem;
        font-family: Roboto, sans-serif;
    }

    @media (min-width: 1000px) {
        order: 2;
        width: 60%;
        align-items: center;

        h2 {
            font-size: 5rem;
            width: 70%;
            text-align: left;
            margin: 0;
            margin-top: 10%;
        }

        p {
            width: 70%;
        }
    }
`

export default Select