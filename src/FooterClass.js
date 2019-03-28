import React from 'react';
import PropTypes from 'prop-types';

class FooterClass extends React.Component {
  render() {
    const { company } = this.props;

    return (
      <footer>
        <p><strong>Copyright</strong> &copy; 2019, {company}</p>
      </footer>
    );
  }
}

FooterClass.defaultProps = {
  company: 'Discover'
};

FooterClass.propTypes = {
  company: PropTypes.string
};



export default FooterClass;
