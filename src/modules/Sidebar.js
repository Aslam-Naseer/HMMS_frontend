const Sidebar = ({ showSidebar }) => {
  return (
    <div className={showSidebar ? "side-nav show-sidebar" : "side-nav"}>
      Sidebar
    </div>
  );
};

export default Sidebar;
