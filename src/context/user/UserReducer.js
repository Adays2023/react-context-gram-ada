export default (state, action) => {
    const { payload, type } = action;
    switch (type) {
      case "getUser":
        return { ...state, currentUser: payload };
      case "getSuggestedAccount":
        return {
          ...state,
          suggestedAccounts: payload,
        };
      case "addAccount":
        const updatedSuggestedAccounts = state.suggestedAccounts.filter(account => account.uid !== payload.uid);
        console.log("updated",updatedSuggestedAccounts);
        return {
         ...state,
          followedAccounts: [...state.followedAccounts,payload],
          suggestedAccounts: updatedSuggestedAccounts,
        };
        case "unFollow":
          const unfollowedAccount = state.followedAccounts.find(account => account.uid === payload);
          const updatedFollowedAccounts = state.followedAccounts.filter(account => account.uid !== payload);
          return {
            ...state,
            followedAccounts: updatedFollowedAccounts,
            suggestedAccounts: [...state.suggestedAccounts, unfollowedAccount],
          };
        
      default:
        return state;
    }
  };