import styles from './__NaMe__.module.scss';

interface I__NaMe__Props {
  backgroundColor?: string
}

export function __NaMe__({ backgroundColor }: I__NaMe__Props) {

  return (
    <div className={styles.__NaMe__} style={{ backgroundColor }}>
      Add component __NaMe__ content here
    </div>
  );
}
