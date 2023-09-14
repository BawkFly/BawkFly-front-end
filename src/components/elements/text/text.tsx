import style from "./text.module.scss";

export type DataElementText = {
  children: string;
};

export default function ElementText(data: DataElementText) {
  const { children } = data;

  return <p className={style.ElementText}>{children}</p>;
}
