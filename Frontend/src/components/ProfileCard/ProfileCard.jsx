import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.png'
import './ProfileCard.css'

const ProfileCard = () => {

    const ProfilePage = true;

  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={Profile} alt="" />
            <img src={Cover} alt="" />
        </div>

        <div className="ProfileName">
            <span>R Van Jaya</span>
            <span>Full Stack Developer</span>
        </div>

        <div className="followStatus">
            <hr />
            <div>
                <div className="follow">
                    <span>0</span>
                    <span>Followings</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>1M</span>
                    <span>Followers</span>
                </div>

                {ProfilePage && (
                    <>
                    <div className="vl">

                    </div>
                    <div className="follow">
                        <span>3</span>
                        <span>Posts</span>
                    </div>
                    </>
                )}
            </div>
            <hr />
        </div>
        {ProfilePage? '': <span>My Profile</span>}
    </div>
  )
}

export default ProfileCard