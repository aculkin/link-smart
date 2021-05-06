export const calculateClickThroughRate = (views) => {
  if (views?.length > 0) {
    const totalClicks = views.reduce(
      (accum, currentView) => (!currentView?.clickId ? accum : accum + 1),
      0
    )
    return totalClicks / views.length
  } else {
    return null
  }
}

export default calculateClickThroughRate
