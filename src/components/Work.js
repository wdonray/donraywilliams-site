import React from "react";
import CenterContainer from "./CenterContainer";
import useStyles from "../style/WorkStyle";
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Icon,
} from "@material-ui/core";
import * as _ from "lodash";
import config from "../data/config";
import { SocialLink } from "../style/SidePanelsStyle";

const Work = ({ direction }) => {
  const classes = useStyles();
  return (
    <CenterContainer>
      <div
        className={classes.root}
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div className={classes.projectContainer}>
          <Typography variant="h3" className={classes.header}>
            Featured Projects
          </Typography>
          <div className={classes.projectListContainer}>
            {_.map(config.portfolioProjects, (item, index) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: direction,
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                className={classes.projectList}
                key={item.Link}
              >
                <img
                  src={item.Image}
                  className={classes.projectImage}
                  alt={`No ${item.Name}`}
                />
                <div className={classes.textContainer}>
                  <Typography
                    onClick={() => window.open(item.Link)}
                    variant="h6"
                    className={classes.projectHeader}
                  >
                    {item.Name}
                  </Typography>
                  <Typography variant="body1" className={classes.projectText}>
                    {item.Status}
                  </Typography>
                  <Typography variant="body1" className={classes.projectInfo}>
                    {item.Info}
                  </Typography>
                  <div className={classes.projectTechContainer}>
                    {_.map(item.Tech, (item) => (
                      <Typography
                        key={item}
                        variant="body2"
                        className={classes.projectTech}
                      >
                        {item}
                      </Typography>
                    ))}
                  </div>
                  <div className={classes.projectTechContainer}>
                    {_.map(item.Github, (item) => (
                      <Typography
                        key={item.Link}
                        variant="body2"
                        className={classes.projectHeader}
                        onClick={() => window.open(item.Link)}
                      >
                        {item.Info}
                      </Typography>
                    ))}
                  </div>
                </div>
                {index !== config.portfolioProjects.length - 1 ? (
                  <div className={classes.divider} />
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <div className={classes.projectContainer}>
          <Typography variant="h3" className={classes.header}>
            Research Projects
          </Typography>
          <div
            style={{ flexDirection: direction }}
            className={classes.researchListContainer}
          >
            {_.map(config.researchProjects, (item) => (
              <Card
                style={{ position: "relative" }}
                className={classes.researchProjectContainer}
              >
                <SocialLink
                  style={{ position: "absolute", top: 0, right: 0 }}
                  underline="none"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={item.Name}
                  href={item.Link}
                >
                  <Icon className={`fab fa-github`} />
                </SocialLink>
                <CardHeader
                  title={
                    <Typography variant="h6" style={{ color: "white" }}>
                      {item.Name}
                    </Typography>
                  }
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    style={{ opacity: 0.7 }}
                    className={classes.header}
                  >
                    {item.Info}
                  </Typography>
                </CardContent>
                <CardActions
                  style={{ position: "absolute", bottom: 0, width: "100%" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",
                      width: "100vw",
                    }}
                  >
                    {_.map(item.Tech, (item) => (
                      <Typography
                        key={item}
                        variant="body2"
                        className={classes.projectTech}
                      >
                        {item}
                      </Typography>
                    ))}
                  </div>
                </CardActions>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </CenterContainer>
  );
};
export default Work;
