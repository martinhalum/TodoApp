# Button

## Summary

The `Button` function is a higher-level component that renders either a `FilledButton` or an `OutlinedButton` based on the `type` prop passed to it.

## Example Usage

```
<Button label="SampleLabel" type="Outlined" onPress={()=>{}}/>
```

### Props

- `label` (string): The text to be displayed on the button.
- `leftAlign` (boolean, optional): Determines if the button should align its content to the left.
- `leftIcon` (string, optional): The name of the icon to be displayed on the left side of the button.
- `rightIcon` (string, optional): The name of the icon to be displayed on the right side of the button.
- `type` ('primary' | 'secondary' | 'outlined' | 'submit', optional): The type of the button.
- `customColor` (string, optional): The custom background color of the button.
- `textColor` (string, optional): The color of the button text.
- `disabled` (boolean, optional): Determines if the button should be disabled.
- `onPress` (() => void, optional): The function to be called when the button is pressed.
