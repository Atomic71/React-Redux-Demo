export const add_obj_to_list = (list, item) => list.push(item);

export const make_list_from_lists = ( lists, currentList ) => lists.reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue), 
    //if current list is ommited, start from an empty array
    ! currentList 
    ? [] 
    : currentList
)

export const list_extractor = (lists) => make_list_from_lists(lists.map(list => [...list.entries]))

export const object_updater = (object, keyIdentifier, newValue) => ({
    ...object,
    [keyIdentifier]: typeof object[keyIdentifier] === "boolean"
    ? !object[keyIdentifier]
    :  newValue
})