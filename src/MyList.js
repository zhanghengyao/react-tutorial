let React = require('react'); 
let MyComponentList=React.createClass({
	render:function(){
		let itemList = [];
		for(let [key,value] of this.props.dataList){
			itemList.push(<MyComponentItem {...this.props} key={key} id={key} value={value}/>);
		}
		return <ul>
					{itemList}
				</ul>
	}
})
let MyComponentItem = React.createClass({
	render:function(){
		return <li>{this.props.value} <a href='javascript:;' id={this.props.id} onClick={this.props.handleDelete}>删除</a></li>
	}
});

let MyComponentInput = React.createClass({
	render:function(){
		return <input type="text" ref="myInput" defaultValue="fuck"/>
	}
}); 

let MyComponentAdd = React.createClass({
	render:function(){
		return <input type="button" value="add" onClick={this.props.handleAdd}/>
	}
});

let MyComponent = React.createClass({
	getDefaultProps:function(){
		return {dataList:new Map([[1,'朱二狗'],[2,'赵尼玛']])}
	},
	getInitialState:function(){
		return {hasNewItem:false}
	},
	handleAdd:function(){
		let value = this.refs.myTextInput.refs.myInput.value;
		let lastKey = this.props.dataList.size+1;
		this.props.dataList.set(lastKey,value);
		this.setState({hasNewItem:!this.state.hasNewItem});
	},
	handleDelete:function(e){
		let id = parseInt(e.target.id);
		let hasDel = this.props.dataList.delete(id);
		this.setState({hasNewItem:!this.state.hasNewItem})
	},
	render:function(){		
		return <div>
				<MyComponentList {...this.props} handleDelete={this.handleDelete}/>
				<MyComponentInput ref="myTextInput"/>
				<MyComponentAdd handleAdd={this.handleAdd}/>
		</div>
	}
});
export {MyComponent}