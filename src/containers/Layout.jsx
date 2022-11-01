import React from 'react';
import NombreYRol from '@components/NombreYRol';

const Layout = ({ children }) => {
	return (
		<div className="Layout">
			<NombreYRol />
			{children}
		</div>
	);
}

export default Layout;