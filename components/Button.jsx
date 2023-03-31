interface ButterProps {
    label: string;
    secondary?: boolean;
    fullWidth?: boolean;
    large?: Boolean;
    onClick: () => void;
}


const Button: React.FC<ButterProps> = ({
    label,
    secondary,
    large,
    onClick
}) => {
  return (
  <button className="disabled:opacity-70">

  </button>
  )
}

export default Button