const iphoneStyle = {
  maxWitdh: '100px',
  minHeight: '500px',
  border: '6px solid #000000',
  borderRadius: '25px',
  padding: '5px'
}

export const IphoneContainer = ({ children }) => {
  return <div style={iphoneStyle}>{children}</div>
}

export default IphoneContainer
