import { Dropdown, Menu, Space } from "antd";
import { Dispatch, SetStateAction } from "react";
import { filterState, initFilterState } from "../FilterWrapper";
import { CheckboxItem } from "./CheckboxItem";

export interface IDropdownButtonFilterItem {
  id: number,
  name: string
}
export interface IDropdownButtonFilterProps {
  visible: boolean,
  isOpen: filterState,
  setIsOpen: Dispatch<SetStateAction<filterState>>,
  items: IDropdownButtonFilterItem[], 
  name: string
}
export function DropdownButtonFilter({
  visible, isOpen, setIsOpen, items, name
}: IDropdownButtonFilterProps) {
  const menuItems = items.map((item: IDropdownButtonFilterItem) => {
    return {
      key: item.id,
      label: (<CheckboxItem item={item} />)
    };
  });

  //overflow-y: auto
  return <Dropdown
    className="dropdown-button"
    overlay={<Menu items={menuItems} />}
    visible={(visible && isOpen[name.toLocaleLowerCase()])}
    trigger={['click']}
  >
    <Space
      onClick={(e) => {
        if(!isOpen[name.toLocaleLowerCase()]){
          setIsOpen({
            ...initFilterState,
            [name.toLocaleLowerCase()]: true});
        } else {
          setIsOpen({
            ...initFilterState,
            [name.toLocaleLowerCase()]: false});
        }
        return e.preventDefault(); 
      }}
      className="dropdown-button--inner"
    >
      {name}
      <div
        style={{
          backgroundImage: isOpen[name.toLocaleLowerCase()] ? 'url(../images/dropup.png)' :
            'url(../images/dropdown.png'
        }}
        className="dropdown-button__icon"></div>
    </Space>
  </Dropdown>;
  
}