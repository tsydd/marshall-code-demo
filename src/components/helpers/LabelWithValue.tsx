interface Props {
  label: string
  value: any
}

const LabelWithValue = (props: Props) => (
  <div className="col text-center">
    <div>{props.label}</div>
    <span className="badge badge-dark">{props.value}</span>
  </div>
);

export default LabelWithValue;
