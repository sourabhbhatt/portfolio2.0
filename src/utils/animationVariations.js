export const reveal = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const revealTop = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

export const revealTopStaggeredChildren = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};
