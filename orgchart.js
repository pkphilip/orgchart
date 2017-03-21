/* @author: Prem Kurian Philip
 * @version: 1.0
 * @description: Javascript organization chart
 */
 
 
function Node(_name, _id, _isOpen) {
	this.name = _name;
	this.id = _id;
	this.isOpen = _isOpen;
	this.isSelected = false;
	this.children = new Array();
	this.onClick = null;
	this.onContextMenu = null;
	this.addChild = function(childNode) {
		this.children.push(childNode);
	}
}
		
function nodeSelected(id, isSelected) {
	
}
		
function OrganizationChart(_objID, _rootNode) {
	this.objID = _objID;
	this.layoutObject = document.getElementById(_objID);
	this.rootNode = _rootNode;
	
	this.renderNode = function(node, isRootNode) {				
		innerHTML = "";
		if (node != null) {
			innerHTML = "<table class='tree' cellspacing='0' cellpadding='0'>";
			numChildren = node.children.length;
			if (node.isOpen == false) {
				innerHTML += "<tr class='node_name_tr'><td id='node_" + node.id + "'><table><tr><td><p class='node_name' onclick='selectNode(" + node.id + ");'>" + node.name + "</p></td></tr></table></td></tr>";					
			} else {
				innerHTML += "<tr class='node_name_tr'><td colspan='" + node.children.length + "' id='node_" + node.id + "' align='center'><table><tr><td id='node_" + node.id + "'><p class='node_name' onclick='selectNode(" + node.id + ");'>" + node.name + "</p></td></tr></table></td></tr>";						
				if (node.children.length > 0) {
					innerHTML += "<tr class='vertical-connector'><td colspan='" + node.children.length + "' align='center'><image src='images/b-1px.gif' class='vertical-line'></td></tr>";			
					innerHTML += "<tr>";
					var i = 0;
					for (i = 0; i < node.children.length; i++) {
						childNode = node.children[i];	
						innerHTML += "<td valign='top'><table class='tree' cellspacing='0' cellpadding='0'>";
						/*
						if (i == 0) {
							innerHTML += "<tr class='horizontal-connector'><td width='50%'></td><td><image src='images/b-1px.gif' class='horizontal-line'></td></tr>";
							innerHTML += "<tr class='vertical-connector'><td width='50%'></td><td align='left'><image src='images/b-1px.gif' class='vertical-line'></td></tr>";	
						} else if (i == node.children.length -1) {
							innerHTML += "<tr class='horizontal-connector'><td><image src='images/b-1px.gif' class='horizontal-line'></td><td width='50%'></td></tr>";
							innerHTML += "<tr class='vertical-connector'><td align='right'><image src='images/b-1px.gif' class='vertical-line'></td><td width='50%'></td></tr>";								
						} else  {
							innerHTML += "<tr class='horizontal-connector'><td colspan='2'><image src='images/b-1px.gif' class='horizontal-line'></td></tr>";
							innerHTML += "<tr class='vertical-connector'><td colspan='2' align='center'><image src='images/b-1px.gif' class='vertical-line'></td></tr>";	
						}*/
						if (i == 0) {
							innerHTML += "<tr class='horizontal-connector'><td width='50%'></td><td><image src='images/b-1px.gif' class='horizontal-line'></td></tr>";
							innerHTML += "<tr class='vertical-connector'><td width='50%'></td><td align='left'><image src='images/b-1px.gif' class='vertical-line'></td></tr>";	
						} else if (i == node.children.length -1) {
							innerHTML += "<tr class='horizontal-connector'><td><image src='images/b-1px.gif' class='horizontal-line'></td><td width='50%'></td></tr>";
							innerHTML += "<tr class='vertical-connector'><td colspan='2' align='center'><image src='images/b-1px.gif' class='vertical-line'></td></tr>";								
						} else  {
							innerHTML += "<tr class='horizontal-connector'><td colspan='2'><image src='images/b-1px.gif' class='horizontal-line'></td></tr>";
							innerHTML += "<tr class='vertical-connector'><td colspan='2' align='center'><image src='images/b-1px.gif' class='vertical-line'></td></tr>";	
						}
						
						innerHTML += "<tr class='node_name_tr'><td colspan='2' valign='top'>" + this.renderNode(childNode, false) + "</td></tr>";
						innerHTML += "</table></td>";
					}
					innerHTML += "</tr>";
				}
			}
			innerHTML += "</table>";									
		}
		return innerHTML;
	};
	
	this.render = function() {
		innerHTML = this.renderNode(this.rootNode, true);
		if (this.layoutObject != null) {
			this.layoutObject.innerHTML = innerHTML;
		}
	};

	this.getNode = function(nodeID, node) {
		if (node.id == nodeID) {
			return node;
		} else {
			var i=0;
			for (i = 0; i < node.children.length; i++) {
				childNode = node.children[i];
				if (childNode.id == nodeID) {
					return childNode;
				} else {
					matchingNode = this.getNode(nodeID, childNode);
					if (matchingNode != null)
						return matchingNode;
				}
			}
		}
		return null;
	}
}
				
