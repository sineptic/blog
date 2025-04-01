---
title: "first page"
created: 2025-03-31
---
# Hello, World!

## Inline formatting
this is a test

and [this](https://example.com) is a link

this is **emphasis**

*italic*

`inline code`

## Code blocks

```rust title="some rust code"
fn main() {
    println!("Hello, World!");
}

fn factorial(n: u32) -> u32 {
    if n == 0 {
        1
    } else {
        n * factorial(n - 1)
    }
}

fn fibonacci(n: u32) -> u32 {
    if n == 0 || n == 1 {
        n
    } else {
        fibonacci(n - 1) + fibonacci(n - 2)
    }
}

fn factorial_of_fibonacci(n: u32) -> u32 {
    factorial(fibonacci(n))
}

fn factorial_of_fibonacci_of_factorial(n: u32) -> u32 {
    factorial_of_fibonacci(factorial(n))
}

fn factorial_of_fibonacci_of_factorial_of_factorial(n: u32) -> u32 {
    factorial_of_fibonacci_of_factorial(factorial(n))
}

fn factorial_of_fibonacci_of_factorial_of_factorial_of_factorial(n: u32) -> u32 {
    factorial_of_fibonacci_of_factorial_of_factorial(factorial(n))
}

fn factorial_of_fibonacci_of_factorial_of_factorial_of_factorial_of_factorial(n: u32) -> u32 {
    factorial_of_fibonacci_of_factorial_of_factorial_of_factorial(factorial(n))
}
```

## Blockquotes

> Blockquote


asdf
