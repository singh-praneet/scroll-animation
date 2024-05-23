import {
  easeIn,
  easeOut,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import cx from "classnames";

import style from "./style.module.scss";

const Card = (props) => {
  const {
    animationWrapperScrollYProgress,
    wrapperHeightInput,
    wrapperBottomInput,
    wrapperRightInput,
    opacityInput,
    zIndex = 1,
    bottomBoxColor,
    cardColor,
  } = props;

  const wrapperHeight = useTransform(
    animationWrapperScrollYProgress,
    ...wrapperHeightInput
  );
  const wrapperBottom = useTransform(
    animationWrapperScrollYProgress,
    ...wrapperBottomInput
  );
  const wrapperRight = useTransform(
    animationWrapperScrollYProgress,
    ...wrapperRightInput
  );

  const greenSectionOpacity = useTransform(
    animationWrapperScrollYProgress,
    ...opacityInput
  );

  return (
    <motion.div
      className={style.animationWrapper}
      style={{
        height: wrapperHeight,
        right: wrapperRight,
        bottom: wrapperBottom,
        zIndex,
      }}
    >
      <motion.div
        className={style.animationWrapperTop}
        style={{
          height: wrapperHeight,
        }}
      >
        <div
          className={style.greenTopPart}
          style={{ backgroundColor: cardColor[0] }}
        >
          <p>
            <b>Paxful</b> design and develop application to reach customers on
            smartphones and tablets.
          </p>
          <div
            className={style.bottomGreen}
            style={{ backgroundColor: cardColor[1] }}
          >
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
          backgroundColor: bottomBoxColor,
        }}
      >
        <p>
          <b>PAXFUL</b>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Card;
