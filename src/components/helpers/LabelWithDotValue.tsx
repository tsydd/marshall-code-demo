interface Props {
  label: string
  value: number
}

const numberFormat = new Intl.NumberFormat('en', {minimumFractionDigits: 1});

function withDot(value: number) {
  return numberFormat.format(value / 10);
}

const LabelWithDotValue = (props: Props) => (
  <div className="col text-center">
    <div>{props.label}</div>
    <span className="badge badge-dark">{withDot(props.value)}</span>
  </div>
);

export default LabelWithDotValue;
