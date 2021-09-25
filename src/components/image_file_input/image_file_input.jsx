import React, { useRef, useState } from "react";
import Loader from "../loader/loader";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const imaged = () => {
    if (name) {
      return styles.uploadedButton;
    }
  };

  const onChange = async (event) => {
    setIsLoading(true);
    try {
      const uploaded = await imageUploader.upload(event.target.files[0]);
      onFileChange({
        name: uploaded.original_filename,
        url: uploaded.secure_url,
      });
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        nmae="file"
        onChange={onChange}
      />
      <button
        className={`${styles.button} ${imaged()}`}
        onClick={onButtonClick}
      >
        {isLoading ? <Loader /> : name || "No file"}
      </button>
    </div>
  );
};

export default ImageFileInput;
