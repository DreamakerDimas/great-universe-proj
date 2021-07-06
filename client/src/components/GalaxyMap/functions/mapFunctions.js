import {MAP_PNG_ARR} from '../../../constants';

// get new width
export const getWidth = (zoomValue) => {
  let newWidth = Math.trunc(zoomValue * window.innerWidth);
  while (newWidth % MAP_PNG_ARR.length) {
    newWidth--;
  }
  return newWidth;
};

// check new position and change if beyond boundaries
export const getCheckedPosition = (top, left, boundaryValues) => {
  // x; if newPos - and < border
  if (left < 0 && left < boundaryValues.left) left = boundaryValues.left;
  // y; if newPos - and < border
  if (top < 0 && top < boundaryValues.top) top = boundaryValues.top;

  // x; if newPos +
  if (left > 0) left = boundaryValues.zero;
  // y; if newPos +
  if (top > 0) top = boundaryValues.zero;

  return {top, left};
};

// get new boundaries values
export const getBoundaries = (width) => {
  if (window.innerWidth - width >= 0) {
    return {
      top: window.innerHeight - width,
      left: 0,
      zero: 0,
    };
  }

  return {
    top: window.innerHeight - width,
    left: window.innerWidth - width,
    zero: 0,
  };
};
