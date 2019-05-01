

 const getTree = function (data,rootId,idTxt,pid,children){
    //  debugger
        if(!data && data.length == 0) return [];  
        var idTxt = idTxt || 'ID';
        var pid = pid || 'FATHERID';
        var children = children || 'children';
        var data = data || [];
        
        let treeData = [];    
        data.forEach(ele => {
            if(!ele[pid]){
                rootId = rootId || ele[idTxt];
                ele.children = [];
                treeData.push(ele);
            }
        })
        
        //递归调用
        function getNode(id){
            let node = [];
            data.forEach((element,i) => {
                if(data[i][pid] == id){
                    data[i][children] = getNode(data[i][idTxt]);
                    node.push(data[i])
                }
            });

            if(node.length == 0){
                return
            }else{
                return node;
            }

        }

        treeData[0].children = getNode(rootId);
        return treeData;

    }

   

export {getTree}