import React from 'react';
import {connect} from "react-redux";

import '../menu.css';
import '../../app/App.css'

const ItemMenu = ({title, operation, lang}) => {
	const fontSize = {
		fontSize: (lang === 'en') ? '2rem' : '1.5rem',
	};
	return (
		<button className="btn btn-success btn-lg btnShadow" style={fontSize}
						onClick={operation} >
			{title}
		</button >
	)
};

const mapStateToProps = (state) => ({
	lang: state.lang,
});

export default connect(mapStateToProps)(ItemMenu);