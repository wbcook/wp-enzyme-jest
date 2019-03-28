import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
  const {company} = props;

  return (
    <footer>
      <p>Copyright &copy; 2019, {company}</p>
    </footer>
  );
};

Footer.propTypes = {
  company: PropTypes.string.isRequired
};

/* Footer.defaultProps = {
  company: 'Discover'
};
 */

export default Footer;
