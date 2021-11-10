import React from "react"


export default function Navbar() {
return(
    <div id="headerBar" class="container-fluid position-fixed p-3 ">
    <div class="row">
      <div class="col-sm text-left" id="links"><a href="#about">Isaac Long </a><a href="#about"> About Me </a><a
          href="#project"> Project</a></div>

      <div class="col-sm text-right"><button id="contactMe" onclick="openForm()">Contact Me</button></div>
    </div>
  </div>
)
}