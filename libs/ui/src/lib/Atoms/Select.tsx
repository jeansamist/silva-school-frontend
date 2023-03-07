import React, { ChangeEvent, FunctionComponent, ReactNode, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export type option = { label: string; value: ReactNode };
export type SelectProps = {
  options?: option[];
  label?: string;
  onChange?: (newValue: option) => void;
};
export const Select: FunctionComponent<SelectProps> = ({
  options = [],
  label = "-- Select --",
  onChange = () => {
    return;
  },
}) => {
  const [selected, setselected] = useState<option>();
  const [active, setactive] = useState(false);
  return (
    <div tabIndex={1} onBlur={() => setactive(false)} className={selected ? "select active" : "select"}>
      <div className="line" onClick={() => setactive(!active)}>
        <div className="label">{label}</div>
        <div className="selected-label">{selected?.label ? selected.label : label}</div>
        <div className="ico">
          <FiChevronDown />
        </div>
      </div>
      <AnimatePresence>
        {active ? (
          <motion.div
            layout
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, y: -25 }}
            className="options"
          >
            {options.length === 0 ? (
              <div className="option">No options :(</div>
            ) : (
              options.map((option, key) => {
                if (option !== selected) {
                  return (
                    <div
                      key={key}
                      className="option"
                      onClick={() => {
                        setselected(option);
                        onChange(option);
                        setactive(false);
                      }}
                    >
                      {option.label}
                    </div>
                  );
                } else {
                  return "";
                }
              })
            )}
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </div>
  );
};

export type SelectSearchProps = {
  options?: option[];
  label?: string;
  onChange?: (newValue: option) => void;
  onSearchChange?: (newValue: string) => void;
};
export function SelectSearch({
  options = [],
  label = "-- Select --",
  onChange = () => {
    return;
  },
  onSearchChange = () => {
    return;
  },
}: SelectSearchProps) {
  const [selected, setselected] = useState<option>();
  const [active, setactive] = useState<boolean>(false);
  const [searchValue, setsearchValue] = useState<string>("");
  const [_options, set_options] = useState(options);
  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setsearchValue(value);
    onSearchChange(searchValue);
    set_options((__options) => {
      return options.filter((val) => val.label.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    });
  }

  return (
    <div className={selected ? "select select-search active" : " select-search select"}>
      <div className="line" onClick={() => setactive(!active)}>
        <div className="label">{label}</div>
        <div className="selected-label">{selected?.label ? selected.label : label}</div>
        <div className="ico">
          <FiChevronDown />
        </div>
      </div>
      <AnimatePresence>
        {active ? (
          <motion.div
            layout
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, y: -25 }}
            className="options"
          >
            <input type="text" value={searchValue} onBlur={() => setactive(false)} onChange={handleSearch} placeholder="Search..." />
            {_options.length === 0 ? (
              <div className="option">No options :(</div>
            ) : (
              _options.map((option, key) => {
                if (option !== selected) {
                  return (
                    <motion.div
                      key={key}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      initial={{ opacity: 0 }}
                      className="option"
                      onClick={() => {
                        onChange(option);
                        setselected(option);
                        setactive(false);
                      }}
                    >
                      {option.label}
                    </motion.div>
                  );
                } else {
                  return "";
                }
              })
            )}
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </div>
  );
}
