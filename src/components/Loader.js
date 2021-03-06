import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg)
    }
`

const Svg = styled.svg`
    #animate {
        transform-origin: center;
        animation: ${rotate} 2s linear infinite;
    }
`

const Loader = () => {
    return (
        <Svg width="128" height="124" viewBox="0 0 128 124" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="66" cy="62" r="61" stroke="#7B87AF" strokeWidth="2"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M92.6738 54.1058L85.789 50.4293C85.5316 50.2914 85.1819 50.3753 85.0132 50.6154L78.7133 59.5921C78.5452 59.8327 78.1739 59.9748 77.8891 59.9079L74.0059 58.9992C73.7205 58.9328 73.4543 58.6405 73.4134 58.3494L71.9009 47.5289C71.86 47.2377 71.5868 47 71.2944 47H61.726C61.4336 47 61.1604 47.2377 61.1184 47.5289L59.5673 58.3587C59.5253 58.6499 59.2585 58.9428 58.9742 59.0097L55.0794 59.9243C54.7951 59.9906 54.4244 59.8492 54.2552 59.6091L47.9558 50.6354C47.7871 50.3953 47.4386 50.3114 47.18 50.4493L40.3262 54.1058C40.0681 54.2438 39.9351 54.5837 40.0314 54.8613L47.5256 76.4969C47.6225 76.7746 47.9401 77 48.2325 77H84.7885C85.0803 77 85.3985 76.7746 85.4942 76.4969L92.9686 54.8613C93.0649 54.5837 92.9319 54.2438 92.6738 54.1058Z" fill="#7B87AF"/>
        <circle cx="5" cy="62" r="5" fill="#7B87AF" id="animate" />
        </Svg>
    )
}

export default Loader 