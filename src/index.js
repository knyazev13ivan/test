/* eslint-disable */
"use strict"
// eslint-disable-next-line no-unused-vars
const bench = (func, arg, iterations = 1e6) => {
  let t = performance.now();
  for (let q = 0; q < iterations; q += 1) {
    func(arg);
  }
  t = performance.now() - t;
  console.log(`// ${t.toFixed(3)} ms`);
};

const make = () => {
  let word = 'wow!';
  
  
  console.log(

  );
};
// eslint-disable-next-line eol-last
make();