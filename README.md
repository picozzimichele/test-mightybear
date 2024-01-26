# Mighty Bear Games Web Developer Technical Test

This test is meant for web developer applications to Mighty Bear Games.

## Task

You will work on a **Video Games Release Tracker**. The project is a **NextJS** project with **Tailwind CSS** installed. The project is bare and only has minimal layout. Your task is to implement as much as the requirements below within the time given to you.

Please make your own repository and use this one as the template. You can easily do this with the _Use this template_ button.

This test is designed to take **4 hours** to finish.

## Evaluation

Your work will be evaluated according to these factors:

- Code structure

- Understanding the requirements

- Communication of design choices

- Aesthetic sense

## Requirements

The project is mobile-first and only. We suggest you keep the viewport in mobile dimensions while developing. You are expected to implement the following requirements in scalable and maintainable way. How you interpret that is up to you.

In the project, the games data is directly passed as props to the game components. This is not ideal as in real world projects, component trees are never just 2 layers deep.

- [ ] Implement a context to store the games data
- [ ] Use the context to pass the data to the game components
- [ ] Convert release date display on each game to a realtime countdown
- [ ] Convert rating on each game into star rating display
- [ ] Show the tags on each game in separate pills/badges
- [ ] Hook up the search bar:
  - If the search bar is empty, display all games
  - If the search bar has value, display only the games whose titles OR description contain the search value
- [ ] Hook up the tags filter:
  - Should display all tags of all games as selectable pills
  - If no tag is selected, display all games
  - If at least one tag is selected, display only the games that have any of the selected tags

### Bonus

In case you finish all the requirements above with time to spare, please feel free to add your own flare to the project. You can decide which features you think would improve the project and at the same time best showcase your talents.

## Guidelines

You can modify any part of the project as you see fit. You can add or remove packages, change the component hierarchy, change the folder structure, or even change the data itself. However, using packages that come with built-in search, countdown, or star rating components are not advised. Take those requirements as opportunities to showcase how you would implement the components in your on way to help us better assess how you work.

You can message your test examiner any time during the duration of this exam. In fact, communication and asking of questions is encouraged.
