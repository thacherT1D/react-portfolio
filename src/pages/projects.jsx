import React, { Component } from "react";
import Helmet from "react-helmet";
import Projects from "../components/Projects/Projects";
import config from "../../data/SiteConfig";

class ProjectsPage extends Component {
  render() {
    return (
      <div className="projects-container">
        <Helmet>
          <title>{`Projects | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/projects/`} />
        </Helmet>
        <Projects />
      </div>
    );
  }
}

export default ProjectsPage;
