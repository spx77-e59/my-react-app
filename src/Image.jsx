import useImageURL from "./useImgURL";

const Image = () => {
  const { imgURL, error, loading } = useImageURL();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>A network error was encountered</p>;

  return (
    imgURL && (
      <>
        <h1>An Image</h1>
        <img src={imgURL} alt={"placeholder text"} />
      </>
    )
  );
};

export default Image;
