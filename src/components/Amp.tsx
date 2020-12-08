import {connect, ConnectedProps} from 'react-redux';
import '../codeApi';
import {RootState} from '../reducers/rootReducer';
import LabelWithDotValue from './helpers/LabelWithDotValue';

const mapState = (state: RootState) => ({
  name: state.amp.currentPatch.name,
  number: state.amp.currentPatch.number,
  connected: state.amp.connected,
  dirty: state.amp.dirty,

  gain: state.amp.currentPatch.gain,
  bass: state.amp.currentPatch.bass,
  middle: state.amp.currentPatch.middle,
  treble: state.amp.currentPatch.treble,
  volume: state.amp.currentPatch.volume,
  gate: state.amp.currentPatch.gate,
});

const connector = connect(mapState);

type Props = ConnectedProps<typeof connector>

const Amp = (props: Props) => (
  <div className="container">
    <h1>{props.number !== undefined && (props.number + ': ')}{props.name}{props.dirty && '*'}
      {props.connected
        ? <span className="badge badge-success float-right">Connected</span>
        : <span className="badge badge-danger float-right">Disconnected</span>}
    </h1>
    <div className="alert alert-primary">
      <div className="row">
        <LabelWithDotValue label="Gain" value={props.gain}/>
        <LabelWithDotValue label="Bass" value={props.bass}/>
        <LabelWithDotValue label="Middle" value={props.middle}/>
        <LabelWithDotValue label="Treble" value={props.treble}/>
        <LabelWithDotValue label="Volume" value={props.volume}/>
        <LabelWithDotValue label="Gate" value={props.gate}/>
      </div>
    </div>
  </div>
);

export default connector(Amp);
