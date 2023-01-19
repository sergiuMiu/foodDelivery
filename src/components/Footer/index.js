import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { MdMoped } from "react-icons/md";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import Links from "./Links.css";

import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>about us</FooterLinkTitle>
              <a
                className="footerLink"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer"
              >
                How it works
              </a>
              <a
                className="footerLink"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer"
              >
                Careers
              </a>
              <a
                className="footerLink"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer"
              >
                couriers
              </a>
              <a
                className="footerLink"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer"
              >
                Investors
              </a>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Links of interest</FooterLinkTitle>
              <a
                className="footerLink"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer"
              >
                frequent questions
              </a>
              <a
                className="footerLink"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer"
              >
                Blog
              </a>
              <a
                className="footerLink"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer"
              >
                Security
              </a>
              <a
                className="footerLink"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer"
              >
                Terms of service
              </a>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <a
                className="footerLink"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer"
              >
                Contact
              </a>
              <a
                className="footerLink"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer"
              >
                Support
              </a>
              <a
                className="footerLink"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer"
              >
                Location
              </a>
              <a
                className="footerLink"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer"
              >
                Sponsorships
              </a>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <a
                className="footerLink"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                className="footerLink"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <a
                className="footerLink"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer"
              >
                Youtube
              </a>
              <a
                className="footerLink"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Deli
              <MdMoped style={{ fontSize: 50 }} />
            </SocialLogo>
            <WebsiteRights>
              Deli © {new Date().getFullYear()} All rights reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
