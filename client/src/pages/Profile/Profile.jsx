import React from "react";
import Row from "react-bootstrap/Row";
import ProfileCard from "../../components/Profile/ProfileCard";
import ProfilePageTitle from "../../components/Profile/ProfilePageTitle";
import ProfileTabCard from "../../components/Profile/ProfileTabCard";

const Profile = () => {
  return (
    <main id="main" className="main">
      <ProfilePageTitle />
      <section className="section profile">
        <Row>
          <ProfileCard />
          <ProfileTabCard />
        </Row>
      </section>
    </main>
  );
};

export default Profile;
