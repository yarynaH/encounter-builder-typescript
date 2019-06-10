import { Breakpoint } from 'shared/types/breakpoints';
import theme from 'styles/variables';
import { MOBILE_BREAKPOINT_NAME } from './BreakpointListener.constants';

export const fromBreakpoints = (
  callback: (breakpoint: Breakpoint) => any,
  excludeMobileBreakpoint: boolean = true
): Record<Breakpoint, any> => {
  let keys = Object.keys(theme.flexboxgrid.breakpoints);
  if (excludeMobileBreakpoint) {
    keys = keys.filter(breakpoint => breakpoint !== MOBILE_BREAKPOINT_NAME);
  }

  return keys.reduce(
    (acc, breakpoint) => ({
      ...acc,
      [breakpoint]: callback(breakpoint as Breakpoint)
    }),
    {}
  ) as Record<Breakpoint, any>;
};

export const getMediaQueryList = (breakpoint: Breakpoint): MediaQueryList =>
  window.matchMedia(
    `${theme.flexboxgrid.mediaQuery} and (min-width: ${theme.flexboxgrid.breakpoints[breakpoint]}em)`
  );