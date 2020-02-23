export function manageFriends(state, action){
  switch(action.type){
    case "ADD_FRIEND":
      return Object.assign({}, state.friends,action.friend)
    case "REMOVE_FRIEND":
      return {state.friends.filter(f=>f.id!=(action.id))}
    default: return state
  }
}
