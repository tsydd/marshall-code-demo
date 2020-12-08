import {ModulationType} from 'marshall-code-api';
import DisablableGroup from './helpers/DisablableGroup';
import LabelWithDotValue from './helpers/LabelWithDotValue';
import LabelWithValue from './helpers/LabelWithValue';

enum ChorusMode {
  CLS,
  VIB,
}

enum FlangerMode {
  JET,
  MET,
}

enum PhaserMode {
  CLS,
  VBE,
}

enum TremoloMode {
  VLV,
  SQR,
}

interface Props {
  enabled: boolean,
  type: ModulationType,
  param1: number,
  param2: number,
  param3: number,
  param4: number,
}

const Modulation = (props: Props) => {
  let component;
  switch (props.type) {
    case ModulationType.Chorus:
      component = <div className="row">
        <LabelWithValue label="Mode" value={ChorusMode[props.param3]}/>
        <LabelWithDotValue label="Speed" value={props.param1}/>
        <LabelWithDotValue label="Depth" value={props.param2}/>
        <LabelWithDotValue label="Tone" value={props.param4}/>
      </div>;
      break;
    case ModulationType.Flanger:
      component = <div className="row">
        <LabelWithValue label="Mode" value={FlangerMode[props.param3]}/>
        <LabelWithDotValue label="Speed" value={props.param1}/>
        <LabelWithDotValue label="Depth" value={props.param2}/>
        <LabelWithDotValue label="Regen" value={props.param4}/>
      </div>;
      break;
    case ModulationType.Phaser:
      component = <div className="row">
        <LabelWithValue label="Mode" value={PhaserMode[props.param3]}/>
        <LabelWithDotValue label="Speed" value={props.param1}/>
        <LabelWithDotValue label="Depth" value={props.param2}/>
        <LabelWithDotValue label="Regen" value={props.param4}/>
      </div>;
      break;
    case ModulationType.Tremolo:
      component = <div className="row">
        <LabelWithValue label="Mode" value={TremoloMode[props.param3]}/>
        <LabelWithDotValue label="Speed" value={props.param1}/>
        <LabelWithDotValue label="Depth" value={props.param2}/>
        <LabelWithValue label="Skew" value={props.param4 - 50}/>
      </div>
      break;
  }
  return (
    <DisablableGroup name="Modulation" enabled={props.enabled} type={ModulationType[props.type]}>
      {component}
    </DisablableGroup>
  );
};

export default Modulation;
