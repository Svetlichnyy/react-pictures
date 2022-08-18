import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { IPicture } from "../models";

export function usePictures() {
  const [pictures, setPictures] = useState<IPicture[]>([]);
  const [loading, setLoading] = useState(false);
  async function fetchPictures() {
    try {
      setLoading(true);
      const response = await axios.get<IPicture[]>(
        "https://boiling-refuge-66454.herokuapp.com/images"
      );
      setPictures(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPictures();
  }, []);
  return { pictures, loading };
}
