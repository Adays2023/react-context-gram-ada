import { Carousel } from 'react-bootstrap';

export function PostPicture({ pictures }) {
  return (
    <Carousel>
      {pictures.map((picture, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={picture.url}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}