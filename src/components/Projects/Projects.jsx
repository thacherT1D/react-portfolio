import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import "./Projects.scss";

class Projects extends Component {
  render() {
    return (
      <div className="projects-container md-grid mobile-fix">
        <Card className="md-grid md-cell-8">
          <div className="projects-wrapper">
            <img
              src={config.userAvatar}
              className="projects-img"
              alt={config.userName}
            />
            <CardText>
              <p className="projects-text md-body-1">
                {config.userDescription}
              </p>
            </CardText>
          </div>
        </Card>
      </div>
    );
  }
}

export default Projects;
