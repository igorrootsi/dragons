import * as React from 'react';
import { Chip, Avatar } from 'material-ui';
import { DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom';

export interface DragonChipProps {
  label: string;
  power: number;
  onDrop: Function;
  onDelete: Function;
  connectDropTarget?: Function;
  isOver?: boolean;
}

const chipTarget = {
  drop(props, monitor, component) {
    props.onDrop(monitor.getItem());
  }
};

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
});

@DropTarget('KnightChip', chipTarget, collect)
export class DragonChip extends React.Component<DragonChipProps> {
  render () {
    const { connectDropTarget, label, power, isOver } = this.props;
    const style = isOver ? { color: 'darkgray' } : {}

    const chipProps = {
      avatar: <Avatar style={style}>{ power && power.toString() }</Avatar>,
      label, style,
      onRequestDelete: () => { this.props.onDelete() }
    }

    return connectDropTarget(<div><Chip { ...chipProps } /></div>);
  }
}
