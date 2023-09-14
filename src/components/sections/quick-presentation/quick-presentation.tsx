import style from './quick-presentation.module.scss';

export type DataSectionQuickPresentation = { loading?: boolean };

export default function SectionQuickPresentation(data: DataSectionQuickPresentation) {
  const { loading } = data;

  const LoadingNotCompleted = () => {
    return <h2>Desenvolver seção QuickPresentation ! (Carregando)</h2>;
  };

  const LoadingCompleted = () => {
    return <h2>Desenvolver seção QuickPresentation ! (Carregado)</h2>;
  };

  return (
    <section id={style.SectionQuickPresentation}>
      {loading ? <LoadingNotCompleted /> : <LoadingCompleted />}
    </section>
  );
}