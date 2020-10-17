import { combineReducers } from "redux";
import { TOGGLE_LIST } from "../actions";

let portugalArray = [
  { country: "Portugal", name: "Aasiya Jayavant", checked: false },
  { country: "Portugal", name: "Loveleen Lawrence", checked: false },
  { country: "Portugal", name: "Ray Mibourne", checked: false },
  { country: "Portugal", name: "Cayala Brister", checked: false },
];

let nicaraguaArray = [
  { country: "Nicaragua", name: "Devedaas Nandi", checked: false },
  { country: "Nicaragua", name: "Obsey Chidi", checked: false },
  { country: "Nicaragua", name: "Xenie Delzelova", checked: false },
  { country: "Nicaragua", name: "Ezequial Dengra", checked: false },
];

let marshallArray = [
  { country: "Marshall Islands", name: "Aaron Almaraz", checked: false },
  { country: "Marshall Islands", name: "Jelena Desinova", checked: false },
];

const initialListState = {
  portugal_List: portugalArray,
  nicaragua_List: nicaraguaArray,
  marshall_Island_List: marshallArray,
  portugal_Show_List: [],
  nicaragua_Show_List: [],
  marshall_Show_List: [],
};

export function listNames(state = initialListState, action) {
  switch (action.type) {
    case TOGGLE_LIST:
      if (action.nameobj.country === "Portugal") {
        let flag = 0;
        for (let name in state.portugal_Show_List) {
          if (name === action.nameobj.name) {
            flag = 1;
            break;
          }
        }
        if (flag === 0) {
          let ind = -1;
          for (let i = 0; i < state.portugal_List.length; i++) {
            if (state.portugal_List[i].name === action.nameobj.name) {
              ind = i;
              break;
            }
          }
          state.portugal_List[ind].checked = true;
          state.portugal_Show_List.push(state.portugal_List[ind]);
        } else {
          state.portugal_Show_List.filter(
            (nameobj) => nameobj.name !== action.nameobj.name
          );
          let ind = -1;
          for (let i = 0; i < state.portugal_List.length; i++) {
            if (state.portugal_List[i].name === action.nameobj.name) {
              ind = i;
              break;
            }
          }
          state.portugal_List[ind].checked = false;
        }
      } else if (action.nameobj.country === "Nicaragua") {
        let flag = 0;
        for (let name in state.nicaragua_Show_List) {
          if (name === action.nameobj.name) {
            flag = 1;
            break;
          }
        }
        if (flag === 0) {
          let ind = -1;
          for (let i = 0; i < state.nicaragua_List.length; i++) {
            if (state.nicaragua_List[i].name === action.nameobj.name) {
              ind = i;
              break;
            }
          }
          state.nicaragua_List[ind].checked = true;
          state.nicaragua_Show_List.push(state.nicaragua_List[ind]);
        } else {
          state.nicaragua_Show_List.filter(
            (nameobj) => nameobj.name !== action.nameobj.name
          );
          let ind = -1;
          for (let i = 0; i < state.nicaragua_List.length; i++) {
            if (state.nicaragua_List[i].name === action.nameobj.name) {
              ind = i;
              break;
            }
          }
          state.nicaragua_List[ind].checked = false;
        }
      } else {
        let flag = 0;
        for (let name in state.marshall_Show_List) {
          if (name === action.nameobj.name) {
            flag = 1;
            break;
          }
        }
        if (flag === 0) {
          let ind = -1;
          for (let i = 0; i < state.marshall_Island_List.length; i++) {
            if (state.marshall_Island_List[i].name === action.nameobj.name) {
              ind = i;
              break;
            }
          }
          state.marshall_Island_List[ind].checked = true;
          state.marshall_Show_List.push(state.marshall_Island_List[ind]);
        } else {
          state.marshall_Show_List.filter(
            (nameobj) => nameobj.name !== action.nameobj.name
          );
          let ind = -1;
          for (let i = 0; i < state.marshall_Island_List.length; i++) {
            if (state.marshall_Island_List[i].name === action.nameobj.name) {
              ind = i;
              break;
            }
          }
          state.marshall_Island_List[ind].checked = false;
        }
      }
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default combineReducers({
  listNames,
});
