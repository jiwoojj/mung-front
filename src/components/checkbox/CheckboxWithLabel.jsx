import React, { useState } from "react";
import { ReactComponent as CheckedIcon } from "../icons/check-on.svg";
import { ReactComponent as UncheckedIcon } from "../icons/check-off.svg";
import S from "./style";
import Text from "../text/size";

const CheckboxWithLabel = ({ label }) => {
  const [checked, setChecked] = useState(false);

  return (
    <S.CheckboxWithLabelWrapper onClick={() => setChecked(!checked)}>
      {checked ? (
        <CheckedIcon width={20} height={20} />
      ) : (
        <UncheckedIcon width={20} height={20} />
      )}
      <Text.Body3 ml="10" fontWeight="600">
        {label}
      </Text.Body3>
    </S.CheckboxWithLabelWrapper>
  );
};

export default CheckboxWithLabel;
