//修改后的版本

//构造函数
function Task(isDelete,content){
    this.isDelete = isDelete;
    this.content = content;
    this.value = "";
}
//存放任务的集合
let taskData = new Array();
let bottonSubmit = new Vue({
    el: '#date',
    data: {
      date: new Date().toLocaleDateString()
    }
    
  })
let submitBotton = new Vue({
    el: '#botton-submit',
    data:{
        value:""
    },
    methods: {
        submitTask: function(value){
            if(value==""){
                return;
            }
            taskData.push(new Task(false,value));
            
        }
    }
})
let alterNumber = 0;
function alerts(content){
    alterNumber++;
    let el = $('<div id="alter'+alterNumber+'" class="alert alert-success">'+content+'</div>');
    $('body').append(el);
    $('#alter'+alterNumber).fadeOut(3000);
}
let taskShow = new Vue({
    el: '#content',
    data:{
        taskData:taskData
    },
    methods: {
        submitTask: function(value){
            if(value==""){
                return;
            }
            taskData.push(new Task(false,value));
            
        },
        getAway: function(index){
            $('.botton'+index).css("display","none");
        } ,
        turnUp: function(index){
            $('.botton'+index).css("display","inline-block");
        },
        modify: function(index,value){
            taskData[index].content = value;
            alerts("修改成功");
        },
        completeTask: function(index){
            taskData[index].isDelete = true;
            alerts("该任务完成");
        },
        deleteTask: function(index){
            taskData.splice(index,1);
            alerts("删除成功");
        },
        search: function(task,event){
            task.content = event.currentTarget.value;
        }
    }
})
