import { TypographyProps, Typography } from '@material-tailwind/react';
import noop from 'lodash/noop';

interface ExtendedProps extends TypographyProps {
  component: React.ElementType;
  placeholder?: string;
  onPointerEnterCapture?: React.PointerEventHandler<HTMLButtonElement>;
  onPointerLeaveCapture?: React.PointerEventHandler<HTMLButtonElement>;
}

const Components = {
  'Typography': Typography,
}


export default function ExtendComponents({
  placeholder = undefined,
  onPointerEnterCapture = noop,
  onPointerLeaveCapture = noop,
  component,
  ...props
}: ExtendedProps) {
  const Component = Components[component as keyof typeof Components];

  return (
    <Component
      placeholder={placeholder}
      onPointerEnterCapture={onPointerEnterCapture}
      onPointerLeaveCapture={onPointerLeaveCapture}
      {...props}
    >
      {props.children}
    </Component>)
};