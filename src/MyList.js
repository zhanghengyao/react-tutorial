let React = require('react'); 
let MyComponentList=React.createClass({
	getDefaultProps:function(){
		return {dataList:['朱二狗','赵尼玛']}
	},
	render:function(){
		return <ul>
					{
						this.props.dataList.map(function(item){
							return <MyComponentItem value={item}/>
						})
					}
				</ul>
	}
})
let MyComponentItem = React.createClass({
	getDefaultProps:function(){
		return {value:''}
	},
	deleteClick:function(e){
		e.target.innerText='已删除'
	},
	render:function(){
		return <li>{this.props.value} <a href='javascript:;' onClick={this.deleteClick}>删除</a></li>
	}
})
let MyComponentInput = React.createClass({
	inputClick:function(e){

	},
	render:function(){
		return <input type="text"/>
	}
}) 
export {MyComponentList}