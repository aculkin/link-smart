const iphoneStyle = {
  maxWitdh: '100px',
  minHeight: '400px',
  border: '6px solid #000000',
  borderRadius: '20px',
  // padding: '5px',
  margin: '5px',
}

export const IphoneContainer = ({ children }) => {
  return <div style={iphoneStyle}>{children}</div>
}

export default IphoneContainer
