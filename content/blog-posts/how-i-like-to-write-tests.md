---
title: "How I like to write tests"
publishDate: "2022-05-19T13:31:00Z"
summary: "A blog post about how I like to name and organise my tests."
coverImage: "/images/blog/cover-images/how-i-like-to-write-tests.png"
draft: false
tags: ["Test Ting", "Test-driven development"]
---

After 3 years of software engineering (and making Ting puns), I now have a sense of how _I_ like to do things instead of simply following the guidance of more senior engineers. Having the opportunity to be a part of a number of projects throughout my time so far at [Made Tech](https://www.madetech.com/) has exposed me to a wide range of technology stacks, disciplines and ways of developing software. One aspect I have gained a passion for is testing and using test-driven development (TDD). As a result for my first blog post, I want to show you the little rules and guides I have in my brain about naming and organising tests in the hope that at least one person might find something useful. Be warned though, most of them might be more realisations of my preferences than hard and fast rules with some things I included I can't make up my mind about! That being said, I think that's okay and natural as I grow more as a software engineer.

## Explain your code through tests

Tests should help document your code, this is one of the many things I was taught in the [Made Tech Academy](https://www.madetech.com/careers/academy/). For example, we could write a single test that says "formats payment" and assert for the string "£1,234,57.89". But what this doesn't tell us is _how_ the payment has been formatted. Does it include the pound sign? Does it include pence? Does it separate the number with commas? Anyone reading a test suite should be able to know what the code does from just looking at the test descriptions. For this scenario I’d prefer a set of tests like:

- "starts payment with a pound sign" then expect that payment starts with "£"
- "separates payment in thousands with commas" then expect payment contains "1,234,567"
- "rounds payment to 2 decimal places" then expect payment ends with ".89"

With these tests, it’ll also make it easier to debug what aspect is broken as each test looks for a specific part of the string.

Let’s look at another example: “orders list of users”. This is a test description I come across quite often. For me though, it’s not specific enough as I find myself asking “orders by what though?” and “what comes first?”. It would be better if this was “orders users by the most recently created first”. This way I know:

1. we’re ordering by when a user was created
2. the most recently created comes first i.e. is it ascending or descending

The second point is my favourite because for some reason my brain can’t comprehend ascending and descending.

My least favourite test name I’ve come across is “should work properly”, what does that mean?!

## Prefer actual explanation over implementation explanation

Honestly I think I go back and forth on this one, but basically I try to avoid having test names that directly point to the implementation of the code. For example, I was testing a controller action which needed to call a service to update some user details. Instead of naming the test: “calls UpdateUser service with new username”, I preferred: “updates user with new username”. The difference is subtle but my thinking is that the fact that it updates a user using a service is an implementation detail and the important thing is that it actually updates the user’s details.

Another tiny thing (or ting - for the record I am tiny) I prefer is “displays” over “renders”. I find I much prefer saying “displays error message that date cannot be in the past” than “renders error component with date in the past message”.

I guess what I’m thinking is “what user need does this code help to fulfil?” i.e. ability to update the username of a user. But then I think these tests are for developers, shouldn't the tests tell them exactly how it's fulfilling a user need e.g. by calling a service that connects to an API or database and rendering the error component we have? Like I said, I flip flop!

## Group tests by context

Growing up with Ruby, RSpec and the amazing [Better Specs](https://www.betterspecs.org/) website helped me get into the habit of grouping tests by context e.g. when a feature flag is on or when a user is signed in and of course, the opposite scenario: when a feature flag is off and when a user is not signed in. For these I always start a context with “when” instead of “if” as “when” indicates that it will happen, whereas “if” indicates that it can happen.

One thing I try to avoid is too many nested contexts - my rule of thumb is no more than three levels. I do this by seeing if I can combine contexts to reduce the number of indented blocks.

```js
// nested contexts
describe("when a user is signed in", () => {
  describe("with an application", () => {
    describe("and it’s submitted", () => {
      it("displays a link to view their application", () => {});
    });
  });

  describe("without an applicationn", () => {
    it("displays a link to start a new application", () => {});
  });
});

// combined contexts
describe("when a user is signed in", () => {
  describe("with a submitted application", () => {
    it("displays a link to view their application", () => {});
  });

  describe("without an applicationn", () => {
    it("displays a link to start a new application", () => {});
  });
});
```

## Avoid “should” or “can”

In a recent pairing (or 🍐-ing) session, I was driving (or playing the role as the typist) and began writing a test with “returns”. My partner then asked “I usually start my tests with ‘should’, don’t you?”. I realised then that I don't like starting tests with “should” or “can” or anything like that. It's because it unnecessarily makes the test name longer than it needs to be. Test descriptions should be as concise as possible whilst being descriptive and the extra “should” or similar is noise to me. Also practically, it means if you’re on a small (or smol) screen there’s more horizontal scrolling than needed. Instead I prefer to begin tests with a verb in the present tense such as “returns”, “displays”, “sets”, “orders”, “retrieves”, “creates” and “hides”, etc.

## Order your tests with purpose

When using TDD, your tests will come in the order that you implemented your functionality. However, this isn’t always the best way to order your tests in. It might be that the simplest next failing test is to do a positive case then a negative and back and forth so it might not be easy to follow. When doing the refactor step of TDD, I think about whether I should reorder the tests to follow the steps in code or group things into contexts and have opposite contexts together. Usually I run my test file and see how it displays in the terminal with all the test names together and see if I should move anything around.

> 💡 Hint: With [RSpec you can use --format documentation](https://relishapp.com/rspec/rspec-core/v/2-6/docs/command-line/format-option) and with [Jest](https://jestjs.io/) when you run a single test file, it'll display all your test names.

## Add newlines to easily spot the arrange, act and assert

An easy and the simplest thing to improve readability is to add newlines. It always surprises me when I see tests without them. It's such an effortless thing to do but seems neglected quite often in my experience. In a test I’m looking to clearly see the arrange, act and assert parts of a test and adding newlines between these makes it way easier to read than a block of code.

## Do away with the top-level describe in Jest

A new learning I've made is that when using Jest, you don’t need to wrap your tests in a `describe`. This honestly blew my mind as I thought you had to start with a `describe` like RSpec but this saves you indenting one level. Previously my test file would always have a top-level "describe" to wrap all the `it` blocks inside e.g. `describe(“<PaintingCard />”, () => {})`. However I don’t anymore now because when you run a single test file, Jest displays the name of your test file and all your test names so the top-level “describe” is redundant.

--

That about wraps up how I currently like to write my tests. I'm sure this will change as I gain more experience and learn more. In the meantime, let me know what you think and how you like to do tes*ting*.
