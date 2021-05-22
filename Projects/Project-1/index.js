var container = document.querySelector('#container');
var First = React.createClass({
    render(){
        var StyleImg = {
            marginBottom : -4
        }
        return(
            <div style = {StyleImg}>
                <img src = 'Images/1.jpg' width = '400' height = '200'></img>
            </div>
        )
    }
});
var Second = React.createClass({
    render(){
        return(
            <div>
                <img src = 'Images/2.png' width = '400' height = '200'></img>
            </div>
        )
    }
});
var Image = React.createClass({
    render(){
        var ImageBox = {
            height : 400,
            width : 400,
            backgroundColor : '#fafafa',
            WebkitFilter : 'drop-shadow(0px 0px 5px #666)',
            filter : 'drop-shadow(0px 0px 5px #666)',
            margin: 'auto',
        }
        return(
            <div style = {ImageBox}>
                <First/>
                <Second/>
            </div>
        )
    }
});
ReactDOM.render(
    <div>
        <Image/>
    </div>,
    container
);