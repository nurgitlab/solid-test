export const Item = ({value, onChange}) => {
  return (
    <div>
      <input value={value} onChange={(e) => onChange(e.target.value)} onClick={() => console.log('here')}/>
    </div>
  )
}