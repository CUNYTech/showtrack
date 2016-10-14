import React from 'react';
import {
  Code,
  CustomerQuote, CustomerQuotes,
  DropdownMenu, DropdownToggle,
  Footer, FooterAddress,
  Hero,
  HorizontalSplit,
  ImageList, ImageListItem,
  Navbar, NavItem,
  Page,
  PricingPlan, PricingTable,
  Section,
  SignupInline, SignupModal,
  Stripe,
  Team,
  TeamMember,
} from "neal-react";

export default (props) => {
  return (
    <Hero backgroundImage="../../assets/img/heasder.jpg"
        className="text-xs-center">
        <h1 className="display-4"> Show Track </h1>
        <p className="lead"> THE ONLINE TV SHOW COMMUNITY </p>

      </Hero>
  )
}
