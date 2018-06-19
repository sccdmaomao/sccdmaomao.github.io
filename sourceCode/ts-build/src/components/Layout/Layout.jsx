import Nav from 'components/Nav';
import React from 'react';
import styles from './Layout.scss';
const Layout = (props) => {
    return (<div className={styles.root}>
      <Nav />
      {props.children}
    </div>);
};
export default Layout;
//# sourceMappingURL=Layout.jsx.map