import {ReactNode} from 'react';

interface Props {
  name: string
  enabled: boolean
  type: string
  children?: ReactNode
}

const DisablableGroup = (props: Props) => (
  <div className={'alert alert-' + (props.enabled ? 'primary' : 'secondary')}>
    <div>{props.name}
      <span className="float-right">
        <input type="checkbox" checked={props.enabled} onChange={() => {
        }}/>
      </span>
    </div>
    <span className="badge badge-dark">{props.type}</span>
    {props.children}
  </div>
);

export default DisablableGroup;
