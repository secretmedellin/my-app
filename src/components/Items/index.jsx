import React from "react";
import ImageCarousel from "../ImageCarousel";
import Image from "../../Images/firepits.jpg";
import Images from "../../Images/image_candy.jpg";

const Imgbooking = (props) => {
  const imgs = [
    { src: Image, text: "firepits" },
    { src: Images, text: "candy" },
  ];
  const onClickItem = (index, item) => {
    props.onClickItem(imgs[index].src);
  };
  return <ImageCarousel imgs={imgs} onClickItem={onClickItem} />;
};

export default Imgbooking;
