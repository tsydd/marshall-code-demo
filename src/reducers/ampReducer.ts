import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {factory, Patch} from 'marshall-code-api';

interface AmpState {
  connected: boolean,
  currentPatch: Patch
  dirty: boolean,
  backup?: Patch
}

const ampSlice = createSlice({
  name: 'amp',
  initialState: {
    connected: false,
    currentPatch: factory.default(),
    dirty: false,
  } as AmpState,
  reducers: {
    setConnected: (state, action: PayloadAction<boolean>) => ({
      ...state,
      connected: action.payload,
    }),
    setPatch: (state, action: PayloadAction<Patch>) => ({
      ...state,
      dirty: false,
      currentPatch: {
        ...(state.currentPatch),
        ...(action.payload),
      },
      backup: action.payload,
    }),
    updatePatch: (state, action: PayloadAction<object>) => ({
      ...state,
      dirty: true,
      currentPatch: {
        ...(state.currentPatch),
        ...(action.payload),
      },
    }),
  },
});

export default ampSlice.reducer;

export const {
  setConnected,
  setPatch,
  updatePatch,
} = ampSlice.actions;
