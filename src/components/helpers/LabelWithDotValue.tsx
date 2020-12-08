import LabelWithValue from './LabelWithValue';

interface Props {
  label: string
  value: number
}

const numberFormat = new Intl.NumberFormat('en', {minimumFractionDigits: 1});

function withDot(value: number) {
  return numberFormat.format(value / 10);
}

const LabelWithDotValue = (props: Props) => (
  <LabelWithValue label={props.label} value={withDot(props.value)}/>
);

export default LabelWithDotValue;
