var container = document.querySelector('#container');
var Header = React.createClass({
    render(){
        var HeaderStyle = {
            fontFamily : 'sans-serif',
            fontWeight : 'bold',
            fontSize : 30,
            margin : 0,
            padding : 6,
            height : 70,
            width : 'auto',
            textAlign : 'center',
            display : 'grid',
            alignItems : 'center'
        }
        return(
            <div>
                <p style = {HeaderStyle}>My Images</p>
            </div>
        )
    }
});
var Image = React.createClass({
    render(){
        var ImageStyle = {
            marginBottom : -5
        }
        return(
            <div>
                <img className = 'imgclass' style = {ImageStyle} src = 'Images/3.jpg' width = '400' height = '220'></img>
                <hr></hr>
                <img className = 'imgclass' src = 'Images/4.jpg' width = '400' height = '220'></img>
            </div>
        )
    }
});
var Footer = React.createClass({
    render(){
        var btnStyle = {
            outline : 'none',
            border : 'none',
            backgroundColor : 'green',
            // display : 'block', 
            color : 'white',
            height : 57,
            width : 400,
            fontSize : 25
        }
        return(
            <div>
                <button className = 'btnclass' style = {btnStyle}>React JS Simple Project</button>
            </div>
        )
    }
});
var Main = React.createClass({
    render(){
        var MainStyle = {
            height : 600,
            width : 400,
            backgroundColor : '#fff',
            WebkitFilter : 'drop-shadow(0px 0px 6px #666)',
            filter : 'drop-shadow(0px 0px 6px #666)',
            margin : 'auto'
        }
        return(
            <div style = {MainStyle}>
                <Header/>
                <Image/>
                <Footer/>
            </div>
        )
    }
});
ReactDOM.render(
    <div>
        <Main/>
    </div>,
    container
)