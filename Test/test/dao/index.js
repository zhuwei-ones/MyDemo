const { createActions, handleActions } = require("redux-actions");
const { fetchWikiSpace } = require("./dao");
const Redux = require("redux");

const act = createActions({
  ADD_TODO: (page) => {
    return fetchWikiSpace(page);
  },
});

// 常规 reducer
const SpaceListReducer = handleActions(
  {
    [act.addTodo]: (state, target) => {
      console.log("handleSpaceList", state, target);
      return {
        counts: 1,
      };
    },
  },
  []
);

const store = Redux.createStore(messageReducer);
console.log("act", act, SpaceListReducer);
