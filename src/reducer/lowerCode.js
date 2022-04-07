const HANDLE_ADD_CARD = 'HANDLE_ADD_CARD'
const HANDLE_MOVE_CARD = 'HANDLE_MOVE_CARD'

const init = {
  data: [
    {
      id: 1,
      type: 'Box',
      children: []
    }
  ]
}

const findItem = (dataList, id)=> {
  let result = null
  const loop = (element)=> {
    if (element.id === id) {
      result = element
      return
    }
    if (element.children) {
      element.children.forEach(c=> loop(c))
    }
  }
  dataList.forEach(item => {
    if(!result) {
      loop(item)
    }
  });
  return result
}

export default function LowerCode (state=init, action) {
  switch (action.type) {
    case HANDLE_ADD_CARD: {
      const {targetId, targetParentId, type, overType} = action.params
      const data = JSON.parse(JSON.stringify(state.data))
      const item = findItem(data, targetId)
      if(!item) {
        return state
      }
      const obj = {
        type,
        id: Math.ceil(Math.random() * 100000)
      }
      if (type === 'Box') {
        obj["children"] = []
      }
      if (overType === 'Box') {
        if (item.children) {
          item.children.push({...obj})
        } else {
          item.children = [{...obj}]
        }
      } else {
        const parentItem = targetParentId ? findItem(data, targetParentId) : data[0]
        const index = parentItem.children.findIndex(t=> t.id === targetId)
        parentItem.children.splice(index + 1, 0, obj)
      }
      
      return {
        ...state,
        data: data
      }
    }
    case HANDLE_MOVE_CARD: {
      const {dragItem, overItem, overType} = action.params
      const {draggedId, dragParentId} = dragItem
      const {overId, overParentId} = overItem
      const data = JSON.parse(JSON.stringify(state.data))
      const item = {...findItem(data, draggedId)}
      
      const source = findItem(data, dragParentId)
      const sourceIndex = source.children.findIndex(t=> t.id === draggedId)
      source.children.splice(sourceIndex, 1)

      if (overType === 'Box') {
        const target = findItem(data, overId)
        if (target.children) {
          target.children.push({...item})
        } else {
          target.children = [{...item}]
        }
      } else {
        const target = findItem(data, overParentId)
        const index = target.children.findIndex(t=> t.id === overId)
        target.children.splice(index, 0, item)
      }
      
      return {
        ...state,
        data: data
      }
    }
    default:
      return state
  }
}

export const handleAddCard = (params)=> ({
  type: HANDLE_ADD_CARD,
  params
})

export const handleMoveCard = (params)=> ({
  type: HANDLE_MOVE_CARD,
  params
})
