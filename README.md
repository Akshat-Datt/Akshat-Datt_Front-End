#  STEELEYE LTD. FRONTEND ENGINEER ASSIGNMENT

# `QUERIES` are discussed below -

## 1. Explain what the simple List component does.

Simple List component is a component that renders an unordered list of items on the webpage.The two components, contained in the code are `WrappedListComponent` and `WrappedSingleListItem`.Relation between the components is like, `WrappedListComponent` is a parent component and on the other hand `WrappedSingleListItem` is child component. "items" is an array of object where each object contains an element "text" of string type.

### Working ###

* `WrappedSingleListComponent`, uses `memo` which displays a single item with green or red as background-colour.
  * `memo` :- re-renders the component if and only if the props have changed, this enhances the performance by avoiding unnecessary re-renders.
* `WrappedListComponent` uses the child component `WrappedSingleListComponent`, to completely generate the list.
* `List` component receives `items` as props, which is an array of objects and is further mapped in `WrappedListComponent` within ul tag
* Props are being passed in `WrappedSingleListItem` component.
* Whenever user click on a single list item, the colour is supposed to change from red to green and vice versa.
* The `isSelected` variable is responsible for changing the background color of the item.
* `onClickHandler()`, uses the 'useState' hook named as 'selectedIndex', to set the index of the item.


## 2. What problems / warnings are there with code? ##

* Incorrect usage of `useState` hook in the `WrappedListComponent`. The correct syntax should be `[selectedIndex, setSelectedIndex]` in place of `[setSelectedIndex, selectedIndex]`.
* `PropTypes.array` and `PropTypes.shapeOf` are defined incorrectly in `WrappedListComponent.propTypes`.
* `key` prop is missing in `SingleListItem` component, which is required for mapping elements of the array.
* `isSelected` prop deals with selection of the item. In the code selectedIndex value, is passed as null, resulting in absurd behavior of the component.
* `onClickHandler` props should be called as a callback whenever the list item is clicked.

## 3. Please fix, optimize, and/or modify the component as much as you think is necessary. ##

* Interchanged `setSelectedIndex` and `selectedIndex` in `useState` hook.
* Changed the definition of `PropTypes.array` to `PropTypes.arrayOf` and `PropTypes.shapeOf` to `PropTypes.shape` in `WrappedListComponent.propTypes`
* Added `key` prop in `SingleListItem`.
* Changed the value of selectedIndex -1 as it will reflect that nothing is selected.
* `onClick={onClickHandler(index)}` to  `onClick={() => onClickHandler(index)}`.



*Name* : Akshat Datt <br/>
*Course* : Btech (CSE) <br/>
*Reg No*. : 12001604 <br/>
*Email id* : dattakshat31@gmail.com <br/>
*Phone No.* : 8219199841 <br/>
