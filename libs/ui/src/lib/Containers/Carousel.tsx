import React, { PropsWithChildren, FunctionComponent, CSSProperties, useState, useEffect, useRef, ReactElement } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
export type CarouselProps = PropsWithChildren<{
  className?: string;
  slidesVisibles?: number;
  slidesToScrool?: number;
  style?: CSSProperties;
}>;

export const Carousel: FunctionComponent<CarouselProps> = ({ children, slidesVisibles = 1, slidesToScrool = 1, className = "", style = {} }) => {
  const [index, setindex] = useState(0);
  const [slidesContainerWidth, setslidesContainerWidth] = useState(100);
  const [slideWidth, setslideWidth] = useState(100);
  const [pages, setpages] = useState(1);

  // const [slidesContainerPixelsWidth, setslidesContainerPixelsWidth] = useState(0);
  // const [slidePixelsWidth, setslidePixelsWidth] = useState(0);

  const containerRef = useRef(null);
  const slideRef = useRef(null);

  useEffect(() => {
    const widthRatio = 100 / slidesVisibles;
    const nbrSlides = React.Children.count(children);
    setslidesContainerWidth(widthRatio * nbrSlides);
    setslideWidth(100 / nbrSlides);

    setpages(nbrSlides - slidesVisibles + 1);
  }, [children, slidesVisibles, slidesToScrool]);

  useEffect(() => {
    // setslidesContainerPixelsWidth(containerRef.current.clientWidth);
    // setslidePixelsWidth(slideRef.current.clientWidth);
  }, [slidesContainerWidth, containerRef, slideRef]);

  function next() {
    if (index + 1 < pages) {
      let nextIndex = index + slidesToScrool;
      if (nextIndex + 1 > pages) {
        nextIndex = nextIndex - (nextIndex - pages) - 1;
      }

      setindex(nextIndex);
    }
  }

  function prev() {
    if (index !== 0) {
      let nextIndex = index - slidesToScrool;
      if (nextIndex < 0) {
        nextIndex = 0;
      }
      setindex(nextIndex);
    }
  }

  return (
    <div style={{ ...style }} className={`slider${className ? ` ${className}` : ""}`}>
      <div
        ref={containerRef}
        className="flex slides-container"
        style={{ width: slidesContainerWidth + "%", transform: `translateX(-${slideWidth * index}%)` }}
      >
        {React.Children.map(children, (child: ReactElement, i: number) => (
          <div ref={slideRef} key={i} className="slide" style={{ width: slideWidth + "%" }}>
            <child.type {...child.props} />
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={prev} className="prev">
          <FiChevronLeft />
        </button>
        <button onClick={next} className="next">
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};
