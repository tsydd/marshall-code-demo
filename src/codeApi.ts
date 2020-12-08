import {CodeApi} from 'marshall-code-api';
import {setConnected, setPatch, updatePatch} from './reducers/ampReducer';
import store from './store';

const codeApi = new CodeApi({
  onConnected: connected => {
    store.dispatch(setConnected(connected));
    if (connected) {
      codeApi.loadPatch();
    }
  },
  onPresetNumberChanged: number => {
    console.log('Preset number changed to', number);
    codeApi.loadPreset(number);
  },
  onPatchChanged: changes => {
    console.log('Patch changed', changes);
    store.dispatch(updatePatch(changes));
  },
  onSettingsUpdated: index => {
    console.log('Patch', index, 'updated');
  },
  onSettingsLoaded: patch => {
    store.dispatch(setPatch(patch));
  },
});

export default codeApi;
