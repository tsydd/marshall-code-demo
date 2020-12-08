import {CabinetType, PowerAmpType, PreAmpType} from 'marshall-code-api';
import {connect, ConnectedProps} from 'react-redux';
import '../codeApi';
import {RootState} from '../reducers/rootReducer';
import DisablableGroup from './helpers/DisablableGroup';
import LabelWithDotValue from './helpers/LabelWithDotValue';

const mapState = (state: RootState) => ({
  connected: state.amp.connected,
  dirty: state.amp.dirty,
  ...(state.amp.currentPatch),

  preAmpType: PreAmpType[state.amp.currentPatch.preAmpType],
  powerAmpType: PowerAmpType[state.amp.currentPatch.powerAmpType],
  cabinetType: CabinetType[state.amp.currentPatch.cabinetType],
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
    <div className="row">
      <div className="col">
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
    </div>
    <div className="row">
      <div className="col">
        <DisablableGroup name="Pre-Amp" enabled={props.preAmpEnabled} type={props.preAmpType}/>
      </div>
      <div className="col">
        <DisablableGroup name="Power-Amp" enabled={props.powerAmpEnabled} type={props.powerAmpType}>
          <div className="row">
            <LabelWithDotValue label="Presence" value={props.presence}/>
            <LabelWithDotValue label="Resonance" value={props.resonance}/>
          </div>
        </DisablableGroup>
      </div>
      <div className="col">
        <DisablableGroup name="Cabinet" enabled={props.cabinetEnabled} type={props.cabinetType}/>
      </div>
    </div>
  </div>
);

export default connector(Amp);
