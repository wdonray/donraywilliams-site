import React from "react";
import useStyles, { EmailLink, SocialLink } from "../style/SidePanelsStyle";
import config from "../data/config";
import * as _ from "lodash";
import SideComponent from "./SideComponent";
import Icon from "@material-ui/core/Icon";
import { loadCSS } from "fg-loadcss";
import { Typography } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";

const SidePanels = () => {
  const classes = useStyles();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <div>
      {isDesktopOrLaptop ? (
        <React.Fragment>
          <SideComponent orientation="left">
            <ul className={classes.socialLinksList}>
              {config.socialMedia &&
                _.map(config.socialMedia, ({ name, url }, i) => (
                  <li key={i}>
                    <SocialLink
                      underline="none"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      aria-label={name}
                      href={url}
                    >
                      <Icon className={`fab fa-${_.toLower(name)}`} />
                    </SocialLink>
                  </li>
                ))}
            </ul>
          </SideComponent>
          <SideComponent orientation="right">
            <div className={classes.linkWrapper}>
              <EmailLink underline="none" href={`mailto:${config.email}`}>
                <Typography variant="body2">{config.email}</Typography>
              </EmailLink>
            </div>
          </SideComponent>
        </React.Fragment>
      ) : (
        <React.Fragment />
      )}
    </div>
  );
};
export default SidePanels;
