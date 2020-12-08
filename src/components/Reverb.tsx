import {ReverbType} from 'marshall-code-api';
import DisablableGroup from './helpers/DisablableGroup';
import LabelWithDotValue from './helpers/LabelWithDotValue';

interface Props {
  enabled: boolean
  type: ReverbType
  param1: number
  param2: number
  param3: number
  param4: number
}

const Reverb = (props: Props) => (
  <DisablableGroup name="Reverb" enabled={props.enabled} type={ReverbType[props.type]}>
    <div className="row">
      <LabelWithDotValue label="Decay" value={props.param1}/>
      <LabelWithDotValue label="Pre-Delay" value={props.param2}/>
      <LabelWithDotValue label="Tone" value={props.param3}/>
      <LabelWithDotValue label="Level" value={props.param4}/>
    </div>
  </DisablableGroup>
);

export default Reverb;
