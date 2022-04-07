import Items from './Items'

const List = ({data, parentId, move}) => {
  return (
    <>
      {
        data?.length ? data.map(item=> <Items key={item.id} parentId={parentId} item={item} move={move} />) : null
      }
    </>
  )
}

export default List