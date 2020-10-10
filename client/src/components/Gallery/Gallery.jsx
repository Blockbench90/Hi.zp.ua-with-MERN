import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import s from "./Gallery.module.css"
import ImageGallery from 'react-image-gallery';
import imageLoader from "./Photos";

const Gallery = () => {
    const images = imageLoader()
    return (
        <div className={s.Wrapper}>
            <ImageGallery items={images}
                          thumbnailPosition={"top"} // позиция миниатюр
                          showPlayButton={false} //показывает кнопку воспроизвидения
                          disableArrowKeys={true}
            />
        </div>
    );
}
export default Gallery;