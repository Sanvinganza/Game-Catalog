import { Checkbox } from "antd";

interface IItem {
  id: number,
  name: string
}

interface ICheckboxItem {
  item: IItem
}

export const CheckboxItem = ({ item }: ICheckboxItem) =>
  <Checkbox className="checkbox-genre" key={item.id}>
    {item.name}
  </Checkbox>;