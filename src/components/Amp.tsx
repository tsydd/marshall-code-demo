import {CabinetType, PowerAmpType, PreAmpType} from 'marshall-code-api';
import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import '../codeApi';
import {RootState} from '../reducers/rootReducer';
import Delay from './Delay';
import DisablableGroup from './helpers/DisablableGroup';
import LabelWithDotValue from './helpers/LabelWithDotValue';
import Modulation from './Modulation';
import Pedal from './Pedal';
import Reverb from './Reverb';

const mapState = (state: RootState) => ({
  connected: state.amp.connected,
  dirty: state.amp.dirty,
  ...(state.amp.currentPatch),
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
        <DisablableGroup name="Pre-Amp" enabled={props.preAmpEnabled} type={PreAmpType[props.preAmpType]}/>
      </div>
      <div className="col">
        <DisablableGroup name="Power-Amp" enabled={props.powerAmpEnabled} type={PowerAmpType[props.powerAmpType]}>
          <div className="row">
            <LabelWithDotValue label="Presence" value={props.presence}/>
            <LabelWithDotValue label="Resonance" value={props.resonance}/>
          </div>
        </DisablableGroup>
      </div>
      <div className="col">
        <DisablableGroup name="Cabinet" enabled={props.cabinetEnabled} type={CabinetType[props.cabinetType]}/>
      </div>
    </div>
    <div className="row">
      <div className="col-6">
        <Pedal enabled={props.pedalEnabled}
               type={props.pedalType}
               param1={props.pedalParam1}
               param2={props.pedalParam2}
               param3={props.pedalParam3}
               param4={props.pedalParam4}/>
      </div>
      <div className="col-6">
        <Modulation enabled={props.modulationEnabled}
                    type={props.modulationType}
                    param1={props.modulationParam1}
                    param2={props.modulationParam2}
                    param3={props.modulationParam3}
                    param4={props.modulationParam4}/>
      </div>
      <div className="col-6">
        <Delay enabled={props.delayEnabled}
               type={props.delayType}
               time={(props.delayTimeMsb << 7) + props.delayTimeLsb}
               param2={props.delayParam2}
               param3={props.delayParam3}
               param4={props.delayParam4}/>
      </div>
      <div className="col-6">
        <Reverb enabled={props.reverbEnabled}
                type={props.reverbType}
                param1={props.reverbParam1}
                param2={props.reverbParam2}
                param3={props.reverbParam3}
                param4={props.reverbParam4}/>
      </div>
    </div>
  </div>
);

export default connector(Amp);
