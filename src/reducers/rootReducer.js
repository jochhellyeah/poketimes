const initState = {
  posts: [
    {
      id: "1",
      title: "Squirtle Laid an Egg",
      body: "Very long paragraph about squirtle",
    },
    {
      id: "2",
      title: "Charmander Laid an Egg",
      body: "Very long paragraph about charmander",
    },
    {
      id: "3",
      title: "Bulbasaur Laid an Egg",
      body: "Very long paragraph about bulbasaur",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter((post) => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts,
    };
  }
  return state;
};

export default rootReducer;
