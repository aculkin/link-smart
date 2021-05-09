export const IphoneContainer = ({ children, backgroundColor = '#FFFFFF' }) => {
  return (
    <div className="smartphone">
      <div className="content">
        <div
          style={{
            backgroundColor,
            padding: '10px',
            width: '100%',
            height: '100%',
            overflowY: 'scroll',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default IphoneContainer
