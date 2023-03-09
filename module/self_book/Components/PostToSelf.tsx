import React, {useState} from "react";
import {SelfOneBook} from "@app/module/self_book/Components/SelfOneBook";
import {Radio, RadioChangeEvent, Space} from "antd";
import {SelfSetBook} from "@app/module/self_book/Components/SelfSetBook";

export function PostToSelf(): JSX.Element {
  const [value, setValue] = useState<number | undefined>(undefined);
  console.log("value", value);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const handleReset = (): void => {
    setValue(undefined);
  };
  return (
    <div>
      {value === undefined && (
        <>
          <h2>Lựa chọn của bạn ?</h2>
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              <Radio value={1}>Bán một cuốn sách</Radio>
              <Radio value={2}>Bán 1 set sách</Radio>
            </Space>
          </Radio.Group>
        </>
      )}
      {value === 1 && <SelfOneBook handleReset={handleReset} />}
      {value === 2 && <SelfSetBook handleReset={handleReset} />}
    </div>
  );
}
