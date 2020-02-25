import React from 'react';
import { Icon, Position, Tooltip } from '@blueprintjs/core';

const NavbarMenu = () => {
  return (
    <nav aria-label="main">
      <ul className="pt-list-unstyled">
        <li>
          <Tooltip content="Home" position={Position.BOTTOM}>
            <a href="#home">
              <Icon icon="home" iconSize="16" color="white" title="home" />
            </a>
          </Tooltip>
        </li>
        <li>
          <Tooltip content="About" position={Position.BOTTOM}>
            <a href="#about">
              <Icon
                icon="info-sign"
                iconSize="16"
                color="white"
                title="about"
              />
            </a>
          </Tooltip>
        </li>
        <li>
          <Tooltip content="Events" position={Position.BOTTOM}>
            <a href="#events">
              <Icon
                icon="calendar"
                iconSize="16"
                color="white"
                title="events"
              />
            </a>
          </Tooltip>
        </li>
        <li>
          <Tooltip content="Community" position={Position.BOTTOM}>
            <a href="#community">
              <Icon
                icon="people"
                iconSize="16"
                color="white"
                title="community"
              />
            </a>
          </Tooltip>
        </li>
        <li>
          <Tooltip content="Code of Conduct" position={Position.BOTTOM}>
            <a href="#code-of-conduct">
              <Icon
                icon="take-action"
                iconSize="16"
                color="white"
                title="code of conduct"
              />
            </a>
          </Tooltip>
        </li>
        <li>
          <Tooltip content="Contact" position={Position.BOTTOM}>
            <a href="#contact">
              <Icon
                icon="envelope"
                iconSize="16"
                color="white"
                title="contact"
              />
            </a>
          </Tooltip>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarMenu;
