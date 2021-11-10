import React, { useState } from 'react'
import styled, {keyframes} from "styled-components"
import { bounce, zoomIn, fadeIn } from "react-animations"
export default function Contact() {
  const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`}`

	return(	
    <FadeIn>
		<div className="container-fluid text-center">
		<h1>Contact Me</h1>
		<form>      
  <input name="name" type="text" className="feedback-input" placeholder="Name" />   
  <input name="email" type="text" className="feedback-input" placeholder="Email" />
  <textarea name="text" className="feedback-input" placeholder="Comment"></textarea>
  <input type="submit" value="SUBMIT"/>
</form>
</div>
</FadeIn>
    );
}