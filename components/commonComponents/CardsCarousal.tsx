import React, { useRef } from "react";
import { CarouselScrollButton } from "./commonSvgs";
import Styles from "@/styles/cards.module.css";

interface CardsCarousalProps {
  allCards: any;
  // onSelect: (style: Style) => void;
  dataLength?: number;
  scrollSize?: number;
  gap?: number;
  containerClass?: string
}

function CardsCarousal({
  allCards,
  dataLength,
  containerClass,
  scrollSize = 3000,
  gap = 16,
}:CardsCarousalProps) {
  const isMobile = false;

  const containerRef = useRef(null);
  const onScrollingLeftAndRight = (direction:string) => {
    const ele:any = containerRef.current;
    if (ele)
      direction == "L"
        ? (ele.scrollLeft -= scrollSize + gap)
        : (ele.scrollLeft += scrollSize + gap);
  };

  return (
    <div
      className={`${Styles.cardCarouselMainCon} ${
        containerClass ? containerClass : ""
      }`}
    >
      {!isMobile &&
        dataLength != undefined &&
        dataLength != null &&
        dataLength >= 2 && (
          <button
            className={`${Styles.srcollButton} ${Styles.srcollButtonLeft}`}
            onClick={() => onScrollingLeftAndRight("L")}
            aria-label="Scroll carousel left"
          >
            <CarouselScrollButton className={Styles.srcollButtonIcons} />
          </button>
        )}

      <div ref={containerRef} className={Styles.cardsHoldingContainer}>
        <div
          className={Styles.cardsHoldingInnerContainer}
          style={{ gap: `${gap}px` }}
        >
          {allCards}
        </div>
      </div>

      {!isMobile &&
        dataLength != undefined &&
        dataLength != null &&
        dataLength >= 2 && (
          <button
            className={`${Styles.srcollButton} ${Styles.srcollButtonRight}`}
            onClick={() => onScrollingLeftAndRight("R")}
             aria-label="Scroll carousel Right"
          >
            <CarouselScrollButton className={Styles.srcollButtonIcons} />
          </button>
        )}
    </div>
  );
}

export default CardsCarousal;
