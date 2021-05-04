import { Icon, Label } from 'semantic-ui-react'

export const AnalyticsLabel = ({ clicks }) => {
  return (
    <Label color={clicks > 0 ? 'blue' : null}>
      <Icon name="chart bar" />
      Clicks<Label.Detail>{clicks}</Label.Detail>
    </Label>
  )
}

export default AnalyticsLabel
