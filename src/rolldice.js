import react , {Component} from 'react';
import Die from './die';
import './rolldice.css'

class Rolldie extends Component{
static defaultProps ={
sides:['one','two','three','four','five','six']
};
constructor(props){
super(props);
this.state={die1:'one', die2:'one', rolling: false}
}

roll(){
const die1no=this.props.sides[Math.floor(Math.random()*this.props.sides.length)];
const die2no=this.props.sides[Math.floor(Math.random()*this.props.sides.length)];

this.setState({die1:die1no, die2:die2no, rolling:true});

setTimeout(()=>{
this.setState({rolling:false});
},1000);
}

render(){
return(
<div className='rolldice'>
<div className='rolldice-cont'>
<Die face={this.state.die1} rolling={this.state.rolling}/>
<Die face={this.state.die2} rolling={this.state.rolling}/>
</div>

<button onClick={this.roll.bind(this)} disabled={this.state.rolling}>
{this.state.rolling? 'Rolling....':'Roll Me'}
</button>
</div>
)
}
}

export default Rolldie