import { ChangeEvent } from "react";
import style from "./form-product-input.module.scss";

export type DataElementFormProductInput<T> = {
  type:
    | "select"
    | "text"
    | "image"
    | "number"
    | "file"
    | "email"
    | "tel"
    | "longText";
  options?: Array<string>;
  value?: T;
  valid?: boolean;
  invalid?: boolean;
  onChange?: (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  placeholder?: string;
  label?: string;
};

export default function ElementFormProductInput<T>(
  data: DataElementFormProductInput<T>
) {
  const { type, options, invalid, onChange, placeholder, valid, value, label } =
    data;

  const Select = (
    <select
      className={style.select}
      onChange={onChange}
      value={value as string}
    >
      {options?.map((value, index) => (
        <option key={index} className={style.option}>
          {value}
        </option>
      ))}
    </select>
  );

  const Text = (
    <input
      value={value as string}
      className={`${style.input} ${style.text}`}
      type={type}
      onChange={onChange}
    />
  );
  const Email = (
    <input
      value={value as string}
      className={`${style.input} ${style.email}`}
      type={type}
      onChange={onChange}
    />
  );
  const Tel = (
    <input
      value={value as string}
      className={`${style.input} ${style.tel}`}
      type={type}
      onChange={onChange}
    />
  );
  const longText = (
    <textarea
      value={value as string}
      className={`${style.input} ${style.longText}`}
      onChange={onChange}
    />
  );
  const Number = (
    <input
      value={value as string}
      className={`${style.input} ${style.number}`}
      type={"text"}
      onChange={onChange}
    />
  );
  const Image = (
    <input
      value={value as string}
      className={`${style.input} ${style.image}`}
      type="file"
      onChange={onChange}
    />
  );
  const File = (
    <input
      className={`${style.input} ${style.file}`}
      type={type}
      onChange={onChange}
    />
  );

  return (
    <div className={style.ElementFormProductInput}>
      {label && <p className={style.label}>{label}</p>}
      <div className={style.containerInput}>
        {type === "select" && Select}
        {type === "text" && Text}
        {type === "email" && Email}
        {type === "tel" && Tel}
        {type === "longText" && longText}
        {type === "number" && Number}
        {type === "image" && Image}
        {type === "file" && File}
        {type === "image" && (
          <img
            className={style.image}
            src="https://www.madeireiraestrela.com.br/images/joomlart/demo/default.jpg"
          />
        )}
      </div>
    </div>
  );
}
