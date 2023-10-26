// DEFAULT EXPORTS PATTERN - ES Modules

// pattern 1
// const add = (a, b) => a + b;
// export default add;

// pattern 2
// export default (a, b) => a + b;

// pattern 3
// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// export default { add, subtract }

// NAMED EXPORTED PATTERN - ES Modules

// pattern 1 - ES Modules
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;