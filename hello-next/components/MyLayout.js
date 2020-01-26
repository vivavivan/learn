import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '10px solid #0D0'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;