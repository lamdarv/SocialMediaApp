import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({modalOpened, setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened = {modalOpened}
      onClose={()=>setModalOpened(false)}
    >
      {/* Modal content */}
      <form className="infoForm">
        <h3>About Me</h3>

        <div>
            <input 
                type="text" 
                className="infoInput"
                name="FirstName"
                placehorder="bangsattt" 
            />
            <input 
                type="text" 
                className="infoInput"
                name="LastName"
                placehorder="Last Name" 
            />
        </div>

        <div>
            <input 
                type="text" 
                className="infoInput"
                name="worksAT"
                placehorder="Works At" 
            />
        </div>

        <div>
            <input 
                type="text" 
                className="infoInput"
                name="livesIN"
                placehorder="Lives in" 
            />
            <input 
                type="text" 
                className="infoInput"
                name="Country"
                placehorder="Country" 
            />
        </div>

        <div>
            <input 
                type="text" 
                className="infoInput"
                placehorder="Relationship Status" 
            />
        </div>

        <div>
            Profile Image
            <input type="file" name="profileImg" />
            Cover Image
            <input type="file" name="coverImg"/>
        </div>

        <button className="button infoButton">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal