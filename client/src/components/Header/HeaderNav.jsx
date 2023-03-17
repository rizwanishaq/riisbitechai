// import Messages from "./Messages/Messages";
// import Notification from "./Notification/Notification";
// import Profile from "./Profile/Profile";
import Search from "./Search/Search";
import Weather from "./Weather/Weather";

const HeaderNav = () => {
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <Search />
        {/* <Notification /> */}
        {/* <Messages /> */}

        {/* <Profile /> */}
        <Weather />
      </ul>
    </nav>
  );
};

export default HeaderNav;
