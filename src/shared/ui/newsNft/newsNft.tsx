import css from './newsNft.module.scss';

type Props = {
  title: string;
  description: string;
};

const NewsNft = ({ title, description }: Props): JSX.Element => {

  return (
    <div className={css.wrapper}>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default NewsNft;
