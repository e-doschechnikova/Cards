import React, {
  SelectHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent,
} from "react";
import s from "./SuperSelect.module.scss";

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: Array<string>;
  onChangeOption?: (option: string) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions: any[] = options
    ? options.map((o, i) => <option key={i}>{o}</option>)
    : [];

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e);
    onChangeOption && onChangeOption(e.currentTarget.value);
  };

  return (
    <div className={s.selectBtn}>
      <select
        className={s.selectContainer}
        onChange={onChangeCallback}
        {...restProps}
      >
        {mappedOptions}
      </select>
    </div>
  );
};

export default SuperSelect;
