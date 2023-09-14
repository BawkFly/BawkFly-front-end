import ElementText from "@/components/elements/text/text";
import style from "./quick-presentation.module.scss";
import logo from "@/assets/imgs/logo.svg";

export type DataSectionQuickPresentation = {};

export default function SectionQuickPresentation(
  data: DataSectionQuickPresentation
) {
  const {} = data;

  return (
    <section id={style.SectionQuickPresentation}>
      <div className={style.upperPart}>
        <img className={style.logo} src={logo.src} alt="Bawk" />
        <ElementText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </ElementText>
      </div>
      <div className={style.lowerPart}>
        <span>CONTACT</span>
        <span>
          <a className={style.anchor} href="maito:SUPORT@BAWK.INFO">
            SUPORT@BAWK.INFO
          </a>{" "}
          |{" "}
          <a className={style.anchor} href="tel:+5544999998888">
            +55 (44) 9 9999-8888
          </a>
        </span>
      </div>
    </section>
  );
}
