import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "./galleryStyles.css";

export default function Gallery(props) {
  let { imageArray } = props;
  const onInit = () => {
    console.log("lightGallery has been initialized");
    console.log(imageArray);
  };
  return (
    <div className="scroll">
      <LightGallery
        onInit={onInit}
        speed={5000}
        plugins={[lgThumbnail, lgZoom]}
      >
        {imageArray.map((imageEle, index) => (
          <a key={index} href={imageEle.imgUrl}>
            <img
              alt={`img${index}`}
              src={imageEle.imgUrl}
              className="gallery-images"
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
}
