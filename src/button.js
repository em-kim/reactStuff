//Using React's state, make a button that increments a counter

class Button extends React.Component {
  constructor() {
    super();
    this.button = "I want to be a button"
  }
  render () {
    return (
      <div>{ this.button }</div>
    )
  }
}