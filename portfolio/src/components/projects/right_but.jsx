import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./right_but.module.css";
import { ReactComponent as RightArrow } from "../../assets/right_arrow.svg";
export const RightBut = () => {
  const swiper = useSwiper();
  const [isEnd, set_isEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
      set_isEnd(swiper.isEnd);
    });
  }, [swiper]);
  return (
    <div className={styles.rightnavi}>
      {/* {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />} */}
      {!isEnd ? (
        <RightArrow
          height={"100%"}
          width={"100%"}
          onClick={() => {
            swiper.slideNext();
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};
