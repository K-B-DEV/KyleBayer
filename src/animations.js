import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import { withTheme } from "@material-ui/core";

export const pageAnimation = {
  hidden: {
    opacity: 0,
    // y: 300,
  },
  show: {
    opacity: 1,
    // y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    // y: 300,
    transition: {
      duration: 0.5,
    },
  },
};

export const exProjPageAnimation = {
  hidden: {
    opacity: 0,
    // y: 300,
  },
  show: {
    opacity: 1,
    // y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.35,
    },
  },
  exit: {
    opacity: 0,
    // y: 300,
    transition: {
      duration: 0.5,
    },
  },
};

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
};

export const popup = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
  // exit: {
  //   opacity: 0,
  //   transition: {
  //     duration: 0.75,
  //   },
  // },
};

export const SlideInFromRight = {
  hidden: {
    opacity: 0,
    transform: "translate3d(100%, 0px, 0px)",
  },
  show: {
    opacity: 1,
    transform: "translate3d(0%, 0px, 0px)",
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
  // exit: {
  //   opacity: 0,
  //   height: 0,
  //   transform: "translate3d(100%, 0px, 0px)",
  //   transition: {
  //     duration: 0.75,
  //   },
  // },
};

export const SlideInFromLeft = {
  hidden: {
    opacity: 0,
    transform: "translate3d(-100%, 0px, 0px)",
  },
  show: {
    opacity: 1,
    transform: "translate3d(0%, 0px, 0px)",
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
  // exit: {
  //   opacity: 0,
  //   height: 0,
  //   transform: "translate3d(100%, 0px, 0px)",
  //   transition: {
  //     duration: 0.75,
  //   },
  // },
};

export const Border = {
  hidden: {
    y: 150,
    height: 0,
    borderLeft: "none",
    borderTop: "none",
  },
  show: {
    y: 0,
    height: "100%",
    borderTop: "none",
    borderLeft: "1px solid white",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      duration: 0.75,
      ease: "easeOut",
    },
  },
};
export const BorderTop = {
  hidden: {
    x: -150,
    width: "0%",
    borderTop: "none",
    borderLeft: "none",
  },
  show: {
    x: 0,
    width: "100%",
    borderTop: "1px solid white",
    borderLeft: "none",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const Open = {
  hidden: {
    height: "0%",
  },
  show: {
    height: "100%",
  },
};
export const Close = {
  hidden: {
    height: "100%",
  },
  show: {
    height: "0%",
  },
};

export const SplashAnimation = {
  hidden: {
    opacity: 0,
    width: 0,
    height: 0,
    // y: 300,
  },
  show: {
    opacity: 1,
    width: "25vw",
    height: "25vh",
    borderRadius: "3rem",
    rotate: 720,
    // y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};

export const SplashLeave = {
  hidden: {
    opacity: 1,
    zindex: 20,
    height: "100vh",
    width: "100vw",
    // y: 300,
  },
  show: {
    opacity: 0,
    zIndex: 0,
    height: "0vh",
    width: "0vw",
    transition: {
      duration: 4,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

export const SplashLeft = {
  hidden: {
    height: "100%",
    width: "100%",
    // y: 300,
  },
  show: {
    height: "100%",
    width: "0%",
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

export const SplashRight = {
  hidden: {
    height: "100%",
    width: "100%",
    marginLeft: "0%",
    // y: 300,
  },
  show: {
    height: "100%",
    width: "0%",
    marginLeft: "100%",
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

export const SplashSplitEnter = {
  hidden: {
    opacity: 0,
    // y: 300,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      when: "beforeChildren",
      // staggerChildren: 0.25,
    },
  },
};

export const blackToWhite = {
  hidden: {
    opacity: 1,
    color: "black",
  },
  show: {
    color: "white",
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
};

export const DropDown = {
  hidden: {
    height: "0%",
  },
  show: {
    height: "100%",
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15,
    },
  },
  exit: {
    height: "0vh",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
