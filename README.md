
# SimpleCalculator.

## A simple calculator, developed with html, css and javascript!

It can solve simple binary operations of **addition**, **subtraction**, **multiplication** and **division**, it allows the use of negative numbers using the "**¬**" operator (different from the subtraction "**-**" operator), it is possible to combine operations by chaining their resolution or using the memory to store an operation and retrieve it later.

### Features:

- Solve addition, subtraction, multiplication and division operations.
- Store and recall an operation from its memory, or empty the memory if necessary. 
- Uses regular expressions to identify binary operations (`n+n`, `n-n`, `n*n` and `n/n`) where "n" is a positive or negative real number.
- Uses regular expressions to identify negative numbers `¬n` and positive numbers expressed as `¬¬n`.
- Returns "syntax error" on an erroneous expression or "math error" on division by zero.
- Includes a help button on how to use the calculator 