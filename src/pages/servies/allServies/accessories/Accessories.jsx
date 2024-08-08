import React, { useState, useEffect } from 'react';
import * as Style from './Style';
import accessoriesData from './accessoriesData.json';

const Accessories  = () => {
  const [popupImage, setPopupImage] = useState(null);
  const [data, setData] = useState(null);

  const whatsappNumber = '9043518660';

  useEffect(() => {
    setData(accessoriesData);
  }, []);

  const handleViewClick = (src) => {
    setPopupImage(src);
  };

  const handleClosePopup = () => {
    setPopupImage(null);
  };

  const handleShareClick = (item) => {
    const text = `Check out this item: ${item.label}\nDescription: ${item.description}\nImage: ${item.src}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!data) return null;

  return (
    <Style.GalleryContainer>
      <Style.InnerContainer>
        <Style.Header>
          <Style.HeaderContent>
            <Style.Title>{data.title}</Style.Title>
            <Style.Description>{data.description}</Style.Description>
          </Style.HeaderContent>
        </Style.Header>
        <Style.GalleryGrid>
          {data.items.map((item) => (
            <Style.GalleryItem key={item.id} large={item.large}>
              <Style.GalleryImage src={item.src} loading="lazy" alt={item.alt} />
              <Style.Overlay />
              <Style.ItemLabel>{item.label}</Style.ItemLabel>
              <Style.OverlayButtons className="overlay-buttons">
                <button onClick={() => handleViewClick(item.src)}>View</button>
                <button onClick={() => handleShareClick(item)}>Share</button>
              </Style.OverlayButtons>
            </Style.GalleryItem>
          ))}
        </Style.GalleryGrid>
      </Style.InnerContainer>
      {popupImage && (
        <Style.Popup onClick={handleClosePopup}>
          <Style.PopupImage src={popupImage} alt="Full screen image" />
        </Style.Popup>
      )}
    </Style.GalleryContainer>
  );
};

export default Accessories ;