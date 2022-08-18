import React from "react";
import "./Item.scss";
import { IComment, IPicture } from "../models";
import axios, { AxiosError } from "axios";

interface PictureProps {
  picture: IPicture;
  open: boolean;
  setOpen: any;
  setPic: any
}

export function Item(props: PictureProps) {

  async function fetchPicture(id: number) {
    try {
      const response = await axios.get<IComment[]>(
        "https://boiling-refuge-66454.herokuapp.com/images/" + id
      );
      props.setOpen(true);
      props.setPic(response.data);
      
    } catch (e: unknown) {
      const error = e as AxiosError;
      console.log(error);
    }
  }

  return (
    <div onClick={() => fetchPicture(props.picture.id)} className="card">
      <img src={props.picture.url} alt="img" />
      <p>id: {props.picture.id}</p>
    </div>
  );
}
