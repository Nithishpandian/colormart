export const animationVariantHero = {
  initial: {
    opacity: 0,
    y: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export const animationVariantWhoWeAre1 = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export const animationVariantWhoWeAre2 = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const animationvariantWhereCanWeHelp = {
  initial: {
    opacity: 0,
    x: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const animationVariantCards = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.5,
    },
  }),
};

export const animationVariantLastThing = {
  initial: {
    opacity: 0,
    x: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
