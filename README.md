# Summary

1. Install Instructions
2. File Structure
3. Code Philosophy
4. Import Pattern
5. Demo
6. Future Improvements
7. Struggles and Mentions

### 1 Install Instructions:

- `npm i`
- For iOS:
  - `cd ios && pod install && cd ..`
  - `npm run ios`
- For Android:
  - `npm run android`

### 2 File Structure:

<img width="468" alt="image" src="https://user-images.githubusercontent.com/26100016/235329821-29e27fa4-e73d-4de3-aa9c-214417f93800.png">

### 3 Code Philosophy:

- Less code is more readable and less opportunitiy for errors.
- Provide names for any code that isn't easy to understand at a glance.
- Balance co-location with code size:
  - Too much code is harder to read, but toggling between files is also a bad developer experience.
  - Optimally: have less and more dense code.
- Keep imports clean by using index files.
- Optimize for developer experience so:
  - Bugs are easier to track down.
  - Features are easier to write and integrate.
  - Code is easy to reason about and is easier to onboard.
- Use consistent style so the code is easier to parse.

### 4 Import Pattern:

- React imports
- Navigation imports
- Redux imports
- Local imports

### 5 Demo 📽 Login credentials automatically inserted:

https://user-images.githubusercontent.com/26100016/235329140-94bd7d34-5292-43da-9835-d7f40fbde74b.mov

https://user-images.githubusercontent.com/26100016/235329142-c77840cd-dac3-4177-a0c8-c443b9386ae1.mov

### 6 Future Improvements:

- Currently there are no tests, but a few tests to make sure that:

  - components mount
  - login endpoint works
  - navigation works on every screen

  would help ensure the core functionality is there after a code change.

- As the app grows, I would separate the navigation index file into individual navigator files, they would then be exported as a single navigator in the index file.

### 7 👷🏼‍♂️ Struggles and Mentions 👷🏼‍♂️

- The React Navigation documentation for type checking left me with type errors,
  I eventually followed this [video](https://www.youtube.com/watch?v=C8b2KIDjnp8) to assign compatible types.

- I had an issue where the marked Ruby version required doesn't exist for an M1 Apple chip, so I installed one semantic version higher. I get a warning.
