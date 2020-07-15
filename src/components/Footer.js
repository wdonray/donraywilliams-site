import React from "react";
import { Icon, Typography } from "@material-ui/core";
import FooterComponent from "./FooterComponent";
import config from "../data/config";
import useStyles, { SocialLink } from "../style/FooterStyle";
import * as _ from "lodash";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const classes = useStyles();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  return (
    <FooterComponent>
      {isDesktopOrLaptop ? (
        <React.Fragment />
      ) : (
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
      )}
      <SocialLink
        underline="none"
        target="_blank"
        href={`${config.socialMedia[0].url}/donraywilliams-site`}
      >
        <Typography variant={'caption'}>Designed & Built by Donray Williams</Typography>
      </SocialLink>
    </FooterComponent>
  );
};
export default Footer;
