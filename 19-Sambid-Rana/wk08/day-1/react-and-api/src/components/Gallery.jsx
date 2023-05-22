import "../style/Gallery.css"
const Gallery = (props) => {
  console.log(props);
  return (
    <div className="gallery-container" >
      {props.images.map((url) => (
        <a href={url} target="_blank">
          <img src={url} key={url} />
        </a>
      ))}
    </div>
  );
};

export default Gallery;
