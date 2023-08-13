import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
  {
    id: nanoid(5),
    active: true,
    inset: false,
    inputs: [{
        inputNumber: 1,
        name: "Horizontal offset",
        value: 0,
        type: "range",
        minMax: [-250,250]
      },
      {
        inputNumber: 2,
        name: "Vertical offset",
        value: 10,
        type: "range",
        minMax: [-250,250]
      },
      {
        inputNumber: 3,
        name: "Blur radius",
        value: 15,
        type: "range",
        minMax: [0,250]
      },
      {
        inputNumber: 4,
        name: "Spread radius",
        value: -3,
        type: "range",
        minMax: [-250,250]
      },
      {
        inputNumber: 5,
        name: "Color",
        value: "#4f4f4f",
        type: "color",
      },
    ],
  },
]

export const shadowSlice = createSlice({
  name:"shadow",
  initialState,
  reducers: {
    removeShadow: (state, action) => {

    },
    addShadow: (state, action) => {
      state.push(  {
        id: nanoid(5),
        Active: true,
        inset: false,
        inputs: [{
            inputNumber: 1,
            name: "Horizontal offset",
            value: 0,
            type: "range",
            minMax: [-250,250]
          },
          {
            inputNumber: 2,
            name: "Vertical offset",
            value: 10,
            type: "range",
            minMax: [-250,250]
          },
          {
            inputNumber: 3,
            name: "Blur radius",
            value: 15,
            type: "range",
            minMax: [0,250]
          },
          {
            inputNumber: 4,
            name: "Spread radius",
            value: -3,
            type: "range",
            minMax: [-250,250]
          },
          {
            inputNumber: 5,
            name: "Color",
            value: "#4f4f4f",
            type: "color",
          },
        ],
      },)
    },
    updateShadowValue: (state, action) => {
      // selectionne la shadow
      const currentShadow = state.find(
        shadow => shadow.id === action.payload.shadowID
      )
        // recupérer l'input de cette shadow
      const currentInput = currentShadow.inputs.find(
        input => input.inputNumber === action.payload.inputNumber
      )
        //changer la valeur de l'input
      currentInput.value = action.payload.value
    },
    updateCheckbox: (state, action) => {
      //selectionne la shadow
      const currentShadow = state.find(
        shadow => shadow.id === action.payload.shadowID
      )
      currentShadow[action.payload.name] = !currentShadow[action.payload.name]
    },
  }
})

export const {addShadow, removeShadow, updateShadowValue, updateCheckbox} = shadowSlice.actions
export default shadowSlice.reducer
