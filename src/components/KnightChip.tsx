import * as React from 'react';
import { Chip, Avatar } from 'material-ui';
import { DragSource } from 'react-dnd';

export interface KnightChipProps {
  label: string;
  power: number;
  onDrop?: Function;
  connectDragSource?: Function;
}

const chipSource = {
  beginDrag({ label, power }, monitor, component) {
    return { label, power };
  },
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
});

@DragSource('KnightChip', chipSource, collect)
export class KnightChip extends React.Component<KnightChipProps> {
  render () {
    const { connectDragSource, label, power } = this.props;
    const chipProps = {
      avatar: <Avatar>{ power && power.toString() }</Avatar>,
      label
    }

    return connectDragSource(<div><Chip { ...chipProps } /></div>);
  }
}
