function Gallery(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.phrase}</p>
      <img src={props.image} />
    </div>
  );
};

export default Gallery;