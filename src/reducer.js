export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // remove finished after developing

  // token:
  //   "BQBuhIzdxUXi_uyrNGH0aFEuNhQBU_3TvSy3ICN-sDWy_RHcRINELdr25oE5eIvvvL9bcFTMrWFxgatm74whUow7EOeFmDiCA_Pzh9ORVxDrb5d_jhF2VXBWKWHxhRR0Kuuzt5kSJ7sVfGyLSXOk8bxdBTXYVnI",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
