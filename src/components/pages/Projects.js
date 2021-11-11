
import React from "react"
import styled, {keyframes} from "styled-components"
import { bounce, zoomIn } from "react-animations"

export default function Projects() {
    const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`
    const ZoomIn = styled.div`animation: 2s ${keyframes`${zoomIn}`}`
    return(
    <div className="container-fluid mt-5 mb-5">
        <ZoomIn>
            <div id="feature" className="row border-dark">
                <div className="col-sm-12 col-md-3" id="featureInfo">
                <h1 className="text-decoration-underline">Featured Project</h1>
                <h3>Name: Writer's Block</h3>
                <h3>Focus: Education</h3>
                <h3>Tech: MERN Stack</h3>
                <h3>Visit: <a href="https://writers-block-26.herokuapp.com/" target="_blank">Live Site</a>  </h3>
                </div>
                <div id="featureImg" className="col-sm-12 col-md-9">
                <img src="./writers-block.jpg"></img>
                </div>
                
            </div>
        </ZoomIn>

            <h1 className="text-center mb-3">Project Gallary</h1>
            <div className="row mt-5">
                <div className="col-sm-12 col-md-6 col-lg-3 gallary "><img className="phoneDemo " src="./notetakerdemo.png"></img></div>
                <div className="col-sm-12 col-md-6 col-lg-3 gallaryInfo text-center ">
                <h2 className="text-decoration-underline"> Note Taker</h2>
                <h3>Focus: Productivity</h3>
                <h3>Tech: Express Node SQL</h3>
                <h3>Visit: <a id="noteTaker" href="https://note-taker26.herokuapp.com/">Live Site</a>  </h3>
                </div>
                <div className="col-sm-12 col-md-3 gallary"><img className="phoneDemo" src="./kevinsDemo.png"></img></div>
                <div className="col-sm-12 col-md-6 col-lg-3 gallaryInfo text-center ">
                <h2 className="text-decoration-underline"> Kevin's Computers</h2>
                <h3>Focus: Marketing</h3>
                <h3>Tech: HTML CSS Jquery</h3>
                <h3>Visit: <a  id="kevins"href="https://kevinscomputers.com">Live Site</a>  </h3>
                </div>

                <div className="row mt-5">
                    <div className="col-sm-12 col-md-6 col-lg-3 gallaryInfo text-center ">
                    <h2 className="text-decoration-underline"> Workout Tracker</h2>
                    <h3>Focus: Health</h3>
                    <h3>Tech: Express Node Mongodb</h3>
                    <h3>Visit: <a id="workout" href="https://pure-chamber-48169.herokuapp.com/">Live Site</a>  </h3>
                    </div>
                    <div className="col-sm-12 col-md-3 gallary"><img className="phoneDemo" src="./workoutDemo.png"></img></div>
                    
                    <div className="col-sm-12 col-md-6 col-lg-3 gallaryInfo text-center ">
                        <h2 className="text-decoration-underline"> Budget Tracker</h2>
                        <h3>Focus: Finance</h3>
                        <h3>Tech: PWA Express Node Mongodb</h3>
                        <h3>Visit: <a id="budget" href="https://budget-tracker26.herokuapp.com/">Live Site</a>  </h3>
                    </div>
                    <div className="col-sm-12 col-md-3 gallary"><img className="phoneDemo" src="./budgetDemo.png"></img></div>

                </div>
            </div>

    </div>
    
    )
}