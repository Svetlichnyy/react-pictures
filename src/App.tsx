import React, { useState } from "react";
import {Item} from './components/Item'
import {Loader} from './components/Loader'
import "./App.css";
import avatar from "./assets/images/Avatar.jpg";
import MailIcon from "./assets/images/Mail.svg";
import PhoneIcon from "./assets/images/Phone.svg";
import { usePictures } from "./hooks/pics";
import Modal from "./components/Modal";
import { IComment } from "./models";

function App() {

const {pictures,loading} = usePictures()
const [open, setOpen] = useState(false)
const [pic, setPic] = useState<IComment[]>()

  return (
    <div>
      {open && <Modal pic={pic} setOpen={setOpen}></Modal>}
      <div className="banner">
        <div className="header-wrap">
          <div className="header">
            <img className="avatar" src={avatar} alt="RC" />
            <div className="info">
              <div className="name">
                <p>Ricardo Cooper</p>
              </div>
              <div className="grow"></div>
              <button className="button">
                <img src={MailIcon} alt="MI" />
                Message
              </button>
              <button className="button call">
                <img src={PhoneIcon} alt="PI" />
                Call
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pictures">
        {loading && <Loader/>}      
      {pictures.map(picture => <Item 
       open={open} 
       setOpen={setOpen} 
       picture={picture} 
       key={picture.id}
       setPic={setPic}
       />)}
      </div>
    </div>
  );
}

export default App;
