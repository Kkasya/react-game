import React from 'react';
import {connect} from 'react-redux';
import './footer.css';

const nameEn = 'Anastassia Kozlovskaya';
const nameRu = 'Анастасия Козловская';

const Footer = ({lang}) => {

	return (
		<div className='footer' >
			<div >
				<span >{(lang === 'en') ? nameEn : nameRu}</span >
				<span ><a target='_blank' href="https://github.com/Kkasya/" >
        <img className="img-footer"
						 src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png"
						 alt="github" />
      </a > </span >
			</div >
			<span >2021</span >
			<span ><a target='_blank' href="https://rs.school/js/" >
        <img className="img-footer rs" src="https://rs.school/images/rs_school_js.svg" alt="rs-school" />
      </a > </span >
		</div >
	)
};

const mapStateToProps = (state) => ({
	lang: state.lang
});

export default connect(mapStateToProps)(Footer);