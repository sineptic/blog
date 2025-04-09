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

> [!NOTE] callouts
> Need styling

> [!note]
> Nested callout
>
> > [!important]
> > Further nested callout
> >
> > > [!warning]
> > > Even further nested callout

> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

## Lists

1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item

- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item

asfd

- 1968\. A great year!
- I think 1969 was second best.

----

* This is the first list item.
* Here's the second list item.

    I need to add another paragraph below the second list item.

* And here's the third list item.

## Misc

<https://www.markdownguide.org>
<fake@example.com>

In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends
of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
eat: it was a [hobbit-hole][1], and that means comfort.

[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"

asdf
