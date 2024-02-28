import List from "../List";

const home = () => {
  return (
    <div className="myMain">
      <div className="trimmed-container">
        <img
          src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg"
          alt="Foto representativa"
          className="img-banner"
        />
      </div>
      <List />
    </div>
  );
};

export default home;
