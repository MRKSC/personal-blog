import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, ...props }) => {
  const isHidden = !!open;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true" />
                Landing
      </a>
      <a href="/work" tabIndex={tabIndex}>
        <span aria-hidden="true" />
                Portfolio
      </a>
      <a href="/contact" tabIndex={tabIndex}>
        <span aria-hidden="true" />
                Contact
      </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;

/*  <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
            <NavLink to="/" tabIndex={tabIndex}>
                <span aria-hidden="true"></span>
                Landing
            </NavLink>
            <a href="/work" tabIndex={tabIndex}>
                <span aria-hidden="true"></span>
                Portfolio
            </a>
            <a href="/contact" tabIndex={tabIndex}>
                <span aria-hidden="true"></span>
                Contact
            </a>
        </StyledMenu> */
