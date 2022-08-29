import { Dropdown, Menu, Space } from "antd";
import { useState } from "react";
import { CheckboxItem } from "./CheckboxItem";

export interface IDropdownButtonFilter_Item {
  id: number,
  name: string
}

export function DropdownButtonFilter(items: IDropdownButtonFilter_Item[], name: string) {
  const menuItems = items.map((item: IDropdownButtonFilter_Item) => {
    return {
      key: item.id,
      label: (<CheckboxItem item={item} />)
    };
  });

  return () => {
    const [isOpen, setIsOpen] = useState(false);

    return <Dropdown
      className="dropdown-button"
      overlay={<Menu items={menuItems} />}
      visible={isOpen}
    >
      <a onClick={(e) => {
        setIsOpen(!isOpen);
        return e.preventDefault();
      }}>
        <Space
          onClick={(e) => { setIsOpen(!isOpen); return e.preventDefault(); }}
          className="dropdown-button--inner"
        >
          {name}
          <div
            style={{
              backgroundImage: isOpen ? 'url(../images/dropup.png)' :
                'url(../images/dropdown.png'
            }}
            className="dropdown-button__icon"></div>
        </Space>
      </a>
    </Dropdown>;
  };
}