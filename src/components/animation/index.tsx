import { useRef } from "react";
import {
  easeIn,
  easeOut,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import cx from "classnames";

import style from "./style.module.scss";

const Animation = () => {
  const sectionWrapper = useRef(null);
  const { scrollYProgress: animationWrapperScrollYProgress } = useScroll({
    target: sectionWrapper,
    offset: ["end end", "start end"],
  });

  const wrapperHeight = useTransform(
    animationWrapperScrollYProgress,
    [0.5, 0.7],
    [500, 0],
    { ease: easeIn }
  );
  const wrapperBottom = useTransform(
    animationWrapperScrollYProgress,
    [0.2, 0.4, 0.5, 0.65],
    [100, 350, 500, 600]
  );
  const wrapperRight = useTransform(
    animationWrapperScrollYProgress,
    [0.2, 0.8],
    ["70%", "0%"]
  );

  const greenSectionOpacity = useTransform(
    animationWrapperScrollYProgress,
    [0.6, 0.75],
    [0, 1]
  );

  return (
    <div>
      <p>This is animation component</p>
      <div className="mt-8 h-[120vh] border-2 border-red-300"></div>
      <div
        ref={sectionWrapper}
        className={
          "relative mt-8 h-[180vh] border-2 border-red-300 " + style.container
        }
      >
        <div className={style.stickySection}>
          <motion.div
            className={style.animationWrapper}
            style={{
              height: wrapperHeight,
              right: wrapperRight,
              bottom: wrapperBottom,
            }}
          >
            <motion.div
              className={style.animationWrapperTop}
              style={{
                height: wrapperHeight,
              }}
            >
              <div className={style.greenTopPart}>
                <p>
                  <b>Paxful</b> design and develop application to reach
                  customers on smartphones and tablets.
                </p>
                <div className={style.bottomGreen}>
                  <p>
                    <b>PAXFUL</b>
                  </p>
                  <div className={style.downloads}>+30K App Downloads</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className={cx(style.greenBox)}
              style={{
                opacity: greenSectionOpacity,
              }}
            >
              <p>
                <b>PAXFUL</b>
              </p>
            </motion.div>
          </motion.div>
          <div></div>
        </div>
      </div>
      <div className="mt-8 h-[80vh] border-2 border-red-300"></div>
      <div className="mt-8 h-[140vh] border-2 border-green-300"></div>
    </div>
  );
};

export default Animation;
