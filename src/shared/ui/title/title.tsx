import css from './title.module.scss';

type Props = {
  title: string;
};

export default function Title({ title }: Props): JSX.Element {
  return <h1 className={css.title}>{title}</h1>;
}
