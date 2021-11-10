
import React from "react"
import styled, {keyframes} from "styled-components"
import { bounce, zoomIn } from "react-animations"

export default function Projects() {
    const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`
    const ZoomIn = styled.div`animation: 2s ${keyframes`${zoomIn}`}`
    return(
    <div className="container-fluid">
    <h1>Projects bouncing</h1>
        <ZoomIn>
            <div id="feature">
                <h1>Featured Project</h1>
                <img src="./writers-block.jpg"></img>
            </div>
        </ZoomIn>
        </div>
    )
}