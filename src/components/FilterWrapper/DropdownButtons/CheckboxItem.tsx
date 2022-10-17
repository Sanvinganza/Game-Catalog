import { Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { IFilterItem } from "../../../redux/reducers/filterReducer";
import { IState } from "../../../redux/store";

interface IItem {
  id: number,
  name: string
}

interface ICheckboxItem {
  item: IItem
}


export const CheckboxItem = ({ item }: ICheckboxItem) => {
  const selector = (state: IState) => Object.values(state.filter)
    .flat(2)
    .map((filterItem: IFilterItem) => filterItem)
    .find( (filterItem: IFilterItem) => filterItem.name === item.name)
    ?.checked;

  const check = useSelector(selector);
  // const dispatch = useDispatch();

  console.log(check);
  return <Checkbox 
    className="checkbox-genre" 
    checked={check}
    onClick={() => {
      // dispatch(fetchFilter());
    }} 
    key={item.id}
  >
    {item.name}
  </Checkbox>;};