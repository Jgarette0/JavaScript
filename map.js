function app(state, output) {
  R.compose(append(view(state)), clear())(output);
}

function fullName({ firstname, lastname }) {
  return `${firstname} ${lastname}`;
}

function view(state) {
  const element = tag("div");
  const add = R.flip(append)(element);
  state.map(human).forEach(add);

  return element;
}

const human = (person, index) => {
  return R.compose(
    append(todo(fullName(person))),
    addClass("todo"),
    attr("id", index)
  )(tag("div"));
};
app(
  Object.freeze([
    {
      firstname: "Jilian Garette",
      lastname: "Abangan",
      age: "20",
    },
    {
      firstname: "William",
      lastname: "Morthy",
      age: "34",
    },
    {
      firstname: "Georgia Hira",
      lastname: "Burlin",
      age: "43",
    },
    {
      firstname: "Jenard Brint",
      lastname: "Fint",
      age: "28",
    },
  ]),
  get("list")
);
//map
