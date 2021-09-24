class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "fbjj5k2t");
    const result = await fetch(
      "https://api.cloudinary.com/v1_1/dyrxmpuov/upload",
      {
        method: "POST",
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImageUploader;
