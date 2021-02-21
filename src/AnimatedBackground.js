import { useEffect, useState } from 'react'
import ParticlesBg from 'particles-bg'

export default function AnimatedBackground() {

    const [height, setHeight] = useState(0)
    
    useEffect(() => {
        setHeight(
            document.body.clientHeight)
    }, [])

    return (
        <div style={{ width: "100%", height: height, position: "absolute", zIndex: "-1", top: "0px", left: "0px" }}>
            <ParticlesBg color="#9562BF" type="circle" num={6}  bg={true} />
        </div>
    )
}