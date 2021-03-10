import React from 'react';
import {connect} from "react-redux";
import '../menu.css';
import '../../app/App.css'

const ItemMenu = ({title, doOperation, lang}) => {
	const fontClass =  (lang === 'en') ? 'font-english' : 'font-russian';
	const itemMenuClass = `btn btn-success btn-lg btnShadow ${fontClass}`;

	return (
		<button className={itemMenuClass}
						onClick={doOperation} >
			{title}
		</button >
	)
};

const mapStateToProps = (state) => ({
	lang: state.lang,
});

export default connect(mapStateToProps)(ItemMenu);