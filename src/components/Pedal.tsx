import {PedalType} from 'marshall-code-api';
import DisablableGroup from './helpers/DisablableGroup';
import LabelWithDotValue from './helpers/LabelWithDotValue';
import LabelWithValue from './helpers/LabelWithValue';

enum DistortionMode {
  GUV,
  ODR,
  DIS,
}

enum AutoWahMode {
  ENV,
  FLO,
}

interface Props {
  enabled: boolean,
  type: PedalType,
  param1: number,
  param2: number,
  param3: number,
  param4: number,
}

const Pedal = (props: Props) => {
  let component;
  switch (props.type) {
    case PedalType.Compressor:
      component = <div className="row">
        <LabelWithDotValue label="Tone" value={props.param1}/>
        <LabelWithDotValue label="Ratio" value={props.param2}/>
        <LabelWithDotValue label="Compression" value={props.param3}/>
        <LabelWithDotValue label="Level" value={props.param4}/>
      </div>;
      break;
    case PedalType.Distortion:
      component = <div className="row">
        <LabelWithValue label="Mode" value={DistortionMode[props.param1]}/>
        <LabelWithDotValue label="Drive" value={props.param2}/>
        <LabelWithDotValue label="Tone" value={props.param3}/>
        <LabelWithDotValue label="Level" value={props.param4}/>
      </div>;
      break;
    case PedalType['Auto Wah']:
      component = <div className="row">
        <LabelWithValue label="Mode" value={AutoWahMode[props.param1]}/>
        <LabelWithDotValue label="Frequency" value={props.param2}/>
        <LabelWithDotValue label="Sensitivity" value={props.param3}/>
        <LabelWithDotValue label="Res" value={props.param4}/>
      </div>;
      break;
    case PedalType['Pitch Shifter']:
      component = <div className="row">
        <LabelWithValue label="Semitone" value={props.param1 - 12}/>
        <LabelWithValue label="Fine" value={props.param2 - 50}/>
        <LabelWithDotValue label="Regen" value={props.param3}/>
        <LabelWithDotValue label="Mix" value={props.param4}/>
      </div>;
      break;
  }
  return (
    <DisablableGroup name="Pedal" enabled={props.enabled} type={PedalType[props.type]}>
      {component}
    </DisablableGroup>
  );
};

export default Pedal;
