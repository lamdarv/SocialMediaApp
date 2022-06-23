import React from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'
import { useState } from 'react'
import ProfileModal from '../ProfileModal/ProfileModal'

const InfoCard = () => {

    const [modalOpened, setModalOpened] = useState(false)

  return (
    <div className="InfoCard">
        <div className="infoHead">
            <h4>About Me</h4>
            <div>
                <UilPen 
                    width="2rem" height="1.2rem" 
                    onClick={()=>setModalOpened(true)} 
                />
                <ProfileModal 
                    modalOpened={modalOpened} 
                    setModalOpened={setModalOpened} 
                />
            </div>
        </div>

        <div className="info">
            <span>
                <b>Status </b>
            </span>
            <span>
                In Relationship
            </span>
        </div>

        <div className="info">
            <span>
                <b>Lives in </b>
            </span>
            <span>
                Ngamprah, KBB
            </span>
        </div>

        <div className="info">
            <span>
                <b>Study at </b>
            </span>
            <span>
                Politeknik Negeri Bandung
            </span>
        </div>

        <button className='button logout-button'>Logout</button>
    </div>
  )
}

export default InfoCard