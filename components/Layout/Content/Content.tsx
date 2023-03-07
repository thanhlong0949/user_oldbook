import React, {useEffect, useState} from "react";
import {dataList} from "../Sidebar/Sidebar";
import {Breadcrumb} from "antd";
import {useRouter} from "next/router";

interface ContentProps {
  children: React.ReactNode;
}

export default function Content({children}: ContentProps): JSX.Element {
  const router = useRouter();
  const [path, setPath] = useState<any>([]);
  const handleGetPath = () => {
    const temp = [];
    let paths = dataList.find((e) => e.key === router.query.kind);
    if (paths) {
      temp.push(paths.name);
      if (paths?.children) {
        temp.push(
          paths.children.find((e) => e.key === router.query.type)?.name
        );
      }
    }
    setPath(temp);
  };
  useEffect(() => {
    handleGetPath();
  }, [router.query]);

  return (
    <div className="content">
      <div className="nav-extra">
        {path.length > 0 && (
          <Breadcrumb>
            {path.map((pt: string, index: number) => (
              <Breadcrumb.Item key={index}>{pt}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}
