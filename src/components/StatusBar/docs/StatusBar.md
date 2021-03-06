# StatusBar

A StatusBar component provides contextual feedback messages for user actions.


## Example

```jsx
<StatusBar>
  Buddy! You have 3 new messages.
</StatusBar>
```


## Props

| Prop | Type | Description |
| --- | --- | --- |
| className | `string` | Custom class names to be added to the component. |
| duration | `number` | Time (ms) for the expand/collapse animation. |
| durationOpen | `number` | Time (ms) for the expand animation. |
| durationClose | `number` | Time (ms) for the collapse animation. |
| isOpen | `bool` | Opens/collapses the component. Default `false`. |
| onClose | `function` | Callback function when the component closes. |
| onOpen | `function` | Callback function when the component opens. |
| style | `string` | Custom styles to be added to the component. |
| status | `string` | Status-based style for the component. |
| theme | `string` | Thematic style for the component. |


### Status

| Value | Description |
| --- | --- |
| `error` | Colors the component red. |
| `info` | Colors the component blue. |
| `success` | Colors the component green. |
| `warning` | Colors the component yellow. |


### Themes

| Value | Description |
| --- | --- |
| `light` | Renders a lighter background color. Default. |
| `bold` | Renders a darker, richer background color. |
