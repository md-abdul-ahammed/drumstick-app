export function replaceHyphensWithSpaces(string) {
  if (string) {
    return string.replace(/-/g, " ");
  }
}

export const Touch = {
  state: {
    xDown: null,
    yDown: null,
  },
  getTouches: (evt) => {
    return (
      evt.touches || // browser API
      evt.originalEvent.touches
    ); // jQuery
  },

  handleTouchStart: (evt) => {
    let firstTouch = Touch.getTouches(evt)[0];
    Touch.state.xDown = firstTouch.clientX;
    Touch.state.yDown = firstTouch.clientY;
  },

  handleTouchMove: (evt) => {
    let action = null;
    let { xDown, yDown } = Touch.state;
    if (!xDown || !yDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        action = "left";
      } else {
        /* right swipe */
        action = "right";
      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
        action = "up";
      } else {
        /* down swipe */
        action = "down";
      }
    }
    /* reset values */
    Touch.state.xDown = null;
    Touch.state.yDown = null;
    return action;
  },
};
