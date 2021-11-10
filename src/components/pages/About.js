import React from "react"
import styled, {keyframes} from "styled-components"
import { bounce, zoomIn, fadeIn } from "react-animations"

export default function About() {

  const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`}`


    return(
      <FadeIn>
        <div id="about" class="container-fluid ">
    <div className="row">
      <div className="col-sm-12 col-md-8 text-center">
        <section id="aboutInfo">
        <h2>About Me </h2>
        <p>Hello my name is Isaac Long, I am currently a student studying code at the University of Pennsylvaina.</p>
        <p>I was born in Lebanon Pennsylvaina and still there to this day.</p>
        <p>I have been coding since I am 14 and love solving problems in any language, python will always be special to
          me as my first language.</p>
        </section>


      </div>
      <div className=" col-sm-12 col-md-4">
        <img src="./serious.jpg" id="profilePic" alt="author of site" ></img>

      </div>
      </div>
      </div>
      </FadeIn>
    )
}