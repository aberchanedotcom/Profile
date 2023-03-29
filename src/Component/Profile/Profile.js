import React from "react";
import PropTypes from "prop-types";
import ProfilePhoto from "./ProfilePhoto";
import HeaderProfile from "./HeaderProfile";


const Profile = ({ fullName, bio, profession, children, handleName }) => {
  return (
    <div>
      <div class="padding">
        <div class="col-md-8">
          <div class="card"><HeaderProfile/>
            <div class="card-body little-profile text-center">
              <div class="pro-img"><ProfilePhoto/></div>
              <h3 class="m-b-0"><h2>{fullName}</h2></h3>
              <p>{bio}</p>
              <p>{profession}</p>
            </div>
            <button onClick={() => handleName(fullName)}>Click me!</button>
          </div>
        </div>
      </div>
    </div>
  );
};


Profile.defaultProps = {
    fullName: 'AMINE ABERCHANE',
    bio: 'Développeur Full Stack.',
    profession: 'Développeur Full Stack JavaScript',
    children: 'https://i.imgur.com/8RKXAIV.jpg"',
    handleName: (name) => alert(`Bonjour, mon nom est ${name}`),
  };
  
  Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    handleName: PropTypes.func.isRequired,
  };
  
export default Profile;
