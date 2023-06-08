class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {message: "Soni"};
    }
    static getDerivedStateFromProps(props, state) {
      return {message: props.msg };
    }
    render() {
      return (
        <h1>My Name is {this.state.message}</h1>
      );
    }
  }
  
  ReactDOM.render(<Header msg="Vidya"/>, document.getElementById('root'));