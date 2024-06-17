import css from './identificationButton.module.scss';
import { Button } from '../button';

type Props = {
    children: React.ReactNode;
}

export default function IdentificationButton({children}: Props): JSX.Element {
  return (
    <Button className={css.button}>
        {children}
    </Button>
  )
}
