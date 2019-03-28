








const iterativeIt = it.each([[1, 2, 3], [2, 2, 4]])

iterativeIt('variations on adding', (a, b, expected) => {
  expect(a + b).toEqual(expected);
});

/*
xit.todo('I should do something about this....'/* , () => {
  expect(21 + 3 ).toBe(50);
} ); */

