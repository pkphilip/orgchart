# Javascript organization chart 

## History
This javascript component was initially created in 2009 before there were equivalent components available from Yahoo, Google etc. However, it is only being released into Github now. Prior to this, the component has been released for commercial or noncommercial use to anyone who asked the author for it.

**Author:** Prem Kurian Philip
**Date:** 2009-01-02


## Introduction 

1. This javascript organisation chart does not rely on any external dependencies such as jquery, prototype etc. The organisation chart is rendered using just tables, rows and columns.

2. Multiple different organization charts can be rendered on the same page using the same list of nodes by varying the root node used.

3. Event handlers can be setup easily to handle open/close events for the nodes. These can be used to allow business rules, access control rules etc to determine if a node should be opened / closed.

4. The nodes can be styled easily.

## Screenshot

![Screenshot of Javascript Organization Chart component](https://github.com/pkphilip/orgchart/blob/master/screenshot.png "Screenshot")

**IMPORTANT**: Please see "index.html" in the repository for a full sample.

## Tutorial 



### 1. Add the orgchart.js and the orgchart.css into your web page. 

```

<link type="text/css" rel="stylesheet" href="styles/orgchart.css" title="Style"/>   
<script src="scripts/orgchart.js">`

```

### 2. Initialize the root node for the component. 

Each new node created takes the following parameters: Name, id, isOpen.

**Example:**

```
    var rootNode = new Node("RootNode", 1, true);

```

This initiatlizes a new Node with the name set to "RootNode", "id" set to 1 and "isOpen" set to true. So this node will be opened up so that it displays the child nodes.

**IMPORTANT**: The "id" is not really used within the organization chart component but it is a way for the event handlers to specify what node was clicked in case you want to add some additional behaviour on mouse click etc. You can see how this is used in the event handler in step 5.



### 3. Start adding child nodes. 

```
    rootNode.addChild(new Node("Child Node 1", 2, true));
    rootNode.addChild(new Node("Child Node 2", 3, false));
    rootNode.addChild(new Node("Child Node 3", 4, false));
   
    var childNode = new Node("Child Node 4", 5, true);
    childNode.addChild(new Node("Child Node 4.1", 6, true));
    childNode.addChild(new Node("Child Node 4.2", 7, true));
    childNode.addChild(new Node("Child Node 4.3", 8, true));
    		
    rootNode.addChild(childNode);		
 
 ```


### 4. Now setup the nodes into the organization chart component and call the "render" method. 

```
    var chart = new OrganizationChart("layout", rootNode);
    chart.render();
 
 ```
 
**Important**: The OrganizationChart component takes the id of the DOM container into which the node is to be rendered as a parameter and also the root node. So it is possible to have multiple OrganizationChart components in the same page with each component displaying different charts by setting a different root node to each.
 

### 5. Optionally, you can also setup an event handler which is called when any of the nodes are clicked. You can setup behaviour such as enabling or disabling the opening of the node based on access control or business rules. 
 
 The event handler returns the "id" of the node as a parameter.
 
 ```
    function selectNode(id) {
        node = chart.getNode(id, chart.rootNode);
	    if (node != null) {      
	        node.isOpen = !node.isOpen;
	        chart.render();
		}
	}
  
```

## A full example is given below: 

```
<script>
    var rootNode = new Node("RootNode", 1, true);
    rootNode.addChild(new Node("Child Node 1", 2, true));
    rootNode.addChild(new Node("Child Node 2", 3, false));
    rootNode.addChild(new Node("Child Node 2", 4, false));
	
    var childNode = new Node("Child Node 3", 5, true);
    childNode.addChild(new Node("Child Node 3.1", 6, true));
    childNode.addChild(new Node("Child Node 3.2", 7, true));
    childNode.addChild(new Node("Child Node 3.3", 8, true));
		
    rootNode.addChild(childNode);		
		
    rootNode.addChild(new Node("Child Node 4", 9, false));
    rootNode.addChild(new Node("Child Node 4.1", 10, false));
    rootNode.addChild(new Node("Child Node 4.2", 11, false));
    rootNode.addChild(new Node("Child Node 4.6", 12, false));
	
    var childNode2 = new Node("Child Node 5", 23, true);
    childNode2.addChild(new Node("Child Node 3.1", 13, true));
    childNode2.addChild(new Node("Child Node 3.2", 14, true));
	
    childNode.addChild(childNode2);		
				
    var childNode3 = new Node("Child Node 8", 15, true);
    childNode3.addChild(new Node("Child Node 8.1", 16, true));
    childNode3.addChild(new Node("Child Node 8.2", 17, true));
    childNode2.addChild(childNode3);		

    childNode = new Node("Child Node 10", 18, true);
    childNode.addChild(new Node("Child Node 3.1", 19, true));
    childNode.addChild(new Node("Child Node 3.2", 20, true));
    childNode.addChild(new Node("Child Node 3.3", 21, true));
    childNode3.addChild(childNode);
	
    var chart = new OrganizationChart("layout", rootNode);
    chart.render();

    /* Add this code if you want the node to automatically open to reveal child nodes. 
    Do not include this code if you would prefer the organization chart to be static */
	function selectNode(nodeID) {
	    node = chart.getNode(nodeID, chart.rootNode);
	    if (node != null) {
		    node.isOpen = !node.isOpen;
		    chart.render();
        }
    }
		
 </script>`
 
 ```
 
 ## Licenses 
 
 MIT &copy; [Songbird Technologies](http://wwws.songbirdtech.com)
