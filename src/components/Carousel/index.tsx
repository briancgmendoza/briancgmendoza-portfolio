import * as React from "react";

import { datas } from "./slider-data";
import styles from "../../styles/Carousel.module.scss";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (currentIndex > 2) {
      setCurrentIndex(0);
    } else {
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 5000);
    }
  }, [currentIndex]);

  return (
    <section className={styles.slider}>
      {datas.map((slide, index) => {
        return (
          <div
            className={
              index === currentIndex
                ? `${styles.slide} ${styles.active}`
                : `${styles.slide}`
            }
            key={index}
          >
            {index === currentIndex && (
              <>
                <img
                  src={slide.src}
                  alt={slide.caption}
                  className={styles.sliderImage}
                />
                <h5>{slide.caption}</h5>
                <p>{slide.paragraph}</p>
              </>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;
