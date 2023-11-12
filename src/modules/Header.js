<script
  src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
  crossorigin
></script>;
const Header = ({ toggleSidebar }) => {
  return (
    <div className="head-nav">
      <div onClick={toggleSidebar} className="side-menu">
        side
      </div>
      <div>Header</div>
    </div>
  );
};

export default Header;
