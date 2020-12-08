import {DelayType} from 'marshall-code-api';
import DisablableGroup from './helpers/DisablableGroup';
import LabelWithDotValue from './helpers/LabelWithDotValue';
import LabelWithValue from './helpers/LabelWithValue';

interface Props {
  enabled: boolean,
  type: DelayType,
  time: number,
  param2: number,
  param3: number,
  param4: number,
}

const Delay = (props: Props) => {
  let component;
  switch (props.type) {
    case DelayType.Studio:
      component = <div className="row">
        <LabelWithValue label="Time" value={props.time}/>
        <LabelWithDotValue label="Feedback" value={props.param2}/>
        <LabelWithDotValue label="Frequency" value={props.param3}/>
        <LabelWithDotValue label="Level" value={props.param4}/>
      </div>;
      break;
    case DelayType.Vintage:
      component = <div className="row">
        <LabelWithValue label="Time" value={props.time}/>
        <LabelWithDotValue label="Feedback" value={props.param2}/>
        <LabelWithDotValue label="Age" value={props.param3}/>
        <LabelWithDotValue label="Level" value={props.param4}/>
      </div>;
      break;
    case DelayType.Multi:
      component = <div className="row">
        <LabelWithValue label="Time" value={props.time}/>
        <LabelWithDotValue label="Feedback" value={props.param2}/>
        <LabelWithValue label="Tap Pattern" value={props.param3 + 1}/>
        <LabelWithDotValue label="Level" value={props.param4}/>
      </div>;
      break;
    case DelayType.Reverse:
      component = <div className="row">
        <LabelWithValue label="Time" value={props.time}/>
        <LabelWithDotValue label="Feedback" value={props.param2}/>
        <LabelWithDotValue label="Frequency" value={props.param3}/>
        <LabelWithDotValue label="Level" value={props.param4}/>
      </div>;
      break;
  }
  return (
    <DisablableGroup name="Delay" enabled={props.enabled} type={DelayType[props.type]}>
      {component}
    </DisablableGroup>
  );
};

export default Delay;
