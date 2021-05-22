var destination = document.querySelector('#container');
var FirstBox = React.createClass({
    render(){
        var FirstBoxStyle = {
            height :430,
            backgroundColor : this.props.color
        }
        return (
            <div style = {FirstBoxStyle}>

            </div>
        )
    }
});
var SecondBox = React.createClass({
    render(){
        var SecondBoxStyle = {
            fontSize : 50,
            fontWeight : 'bold',
            fontFamily : 'monospace',
            display : 'grid',
            alignItems : 'center',
            textAlign : 'center',
            marginTop : 7
 }
        return(
            <div style = {SecondBoxStyle}>{this.props.color}</div>
        )
    }
});
var MainBox = React.createClass({
    render(){
        var MainBoxStyle = {
            backgroundColor : '#fff',
            height  : 500,
            width : 350,
            WebkitFilter : 'drop-shadow(0px 0px 6px #666)',
            filter : 'drop-shadow(0px 0px 6px #666)'
        }
        return(
            <div style = {MainBoxStyle}>
                <FirstBox color = {this.props.color}/>
                <SecondBox color = {this.props.color}/>
            </div>
        )
    }
});
ReactDOM.render(
    <div>
        <MainBox color = '#FFA737'/>
    </div>,
    destination
);
