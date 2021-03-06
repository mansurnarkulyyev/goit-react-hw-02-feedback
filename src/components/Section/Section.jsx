import React from 'react';
import PropTypes from 'prop-types';
import st from './Section';

const Section = ({title, children})=>(
<div className={st.Container}>
  <h2>{title}</h2>
  <div>{children}</div>
</div>
);

Section.propTypes ={
    title: PropTypes.string.isRequired,
    children:PropTypes.node.isRequired,
}

export default Section;

