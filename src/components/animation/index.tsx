import { useRef } from "react";
import {
  easeIn,
  easeOut,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import cx from "classnames";
import Card from "../card";

import style from "./style.module.scss";

const Animation = () => {
  const sectionWrapper = useRef(null);
  const { scrollYProgress: animationWrapperScrollYProgress } = useScroll({
    target: sectionWrapper,
    offset: ["end end", "start start"],
  });

  return (
    <div>
      <div
        ref={sectionWrapper}
        className={
          "relative h-[230vh] border-2 border-red-300 " + style.container
        }
      >
        <div className={style.stickySection}>
          <Card
            animationWrapperScrollYProgress={animationWrapperScrollYProgress}
            wrapperHeightInput={[
              [0.6, 0.8],
              [500, 0],
            ]}
            wrapperBottomInput={[
              [0.3, 0.5, 0.7, 0.9],
              [200, 350, 50, 175],
            ]}
            wrapperRightInput={[
              [0.3, 0.7, 0.9],
              ["65%", "10%", "0%"],
            ]}
            opacityInput={[
              [0.7, 0.85],
              [0, 1],
            ]}
            zIndex={10}
            cardColor={["rgba(50, 181, 108, 255)", "#299559", "#116949"]}
            bottomBoxColor={"green"}
          />
          <Card
            animationWrapperScrollYProgress={animationWrapperScrollYProgress}
            wrapperHeightInput={[
              [0.6, 0.8],
              [500, 0],
            ]}
            wrapperBottomInput={[
              [0.3, 0.5, 0.7, 0.9],
              [200, 350, 115, 240],
            ]}
            wrapperRightInput={[
              [0.3, 0.7, 0.9],
              ["35%", "7%", "-4%"],
            ]}
            opacityInput={[
              [0.7, 0.85],
              [0, 1],
            ]}
            cardColor={["yellow", "#299559", "#116949"]}
            bottomBoxColor={"yellow"}
          />
        </div>
      </div>
      <div className="mt-8 h-[80vh] border-2 border-red-300"></div>
      <div className="mt-8 h-[140vh] border-2 border-green-300"></div>
    </div>
  );
};

export default Animation;
