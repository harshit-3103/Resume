import React, { Component } from "react";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {

      return (
        <div key={id++} className="columns portfolio-item">
          <a href={projects.url} className="item-wrap">
            <img alt={projects.title} src={projects.image} />
            <div style={{ textAlign: "center",fontWeight:"bold" }}>

              
              {projects.title}</div>
          </a>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1 style={{fontWeight:'900',color:"black"}}>Check Out Some of My Works.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
