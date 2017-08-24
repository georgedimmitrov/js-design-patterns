const speaker = state => {
  const noise = state.noise || 'grunt';

  return {
    speak() {
      console.log(`${state.name} says ${noise}`);
    }
  };
};

const mover = state => {
  return {
    moveSlowly() {
      console.log(`${state.name} is moving slowly`);
    },
    moveQuickly() {
      console.log(`${state.name} is moving quickly`);
    }
  };
};

const person = (name, age) => {
  const state = {
    name,
    age,
    noise: 'Hello'
  };

  return Object.assign(
    {},
    speaker(state),
    mover(state)
  );
};

const rabbit = (name, colour) => {
  const state = {
    name,
    colour
  };

  return Object.assign(
    {},
    mover(state)
  );
};

const peter = person('Peter', 22);
peter.speak(); // "Fred says Hello"
peter.moveSlowly(); // "Fred is moving slowly"

const cindy = rabbit('Cindy', 'white');
cindy.moveSlowly(); // "Cindy is moving slowly"
cindy.moveQuickly(); // "Cindy is moving quickly"
cindy.speak(); // ERROR: cindy.speak is not a function
